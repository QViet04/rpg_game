module rpg_game::hero_shop {
    use iota::object::{Self, UID};
    use iota::tx_context::{Self, TxContext};
    use iota::transfer;
    use iota::package;
    use iota::display;
    use std::string::{Self, String};

    // --- 1. DATA STRUCTURES (English) ---

    public struct Hero has key, store {
        id: UID,
        name: String,
        weapon: Option<Sword>, 
    }

    public struct Sword has key, store {
        id: UID,
        strength: u64,   // Sức mạnh
        agility: u64,    // Nhanh nhẹn (Mới)
        hp: u64,         // Máu (Mới)
        crit_chance: u64 // Chí mạng (Mới)
    }

    public struct HERO_SHOP has drop {}

    fun init(otw: HERO_SHOP, ctx: &mut TxContext) {
        let publisher = package::claim(otw, ctx);
        let mut display = display::new_with_fields<Hero>(
            &publisher,
            vector[string::utf8(b"name")],
            vector[string::utf8(b"{name}")],
            ctx
        );
        display::update_version(&mut display);
        transfer::public_transfer(publisher, tx_context::sender(ctx));
        transfer::public_transfer(display, tx_context::sender(ctx));
    }

    // --- 2. FUNCTIONS (English) ---

    // Create Hero
    public entry fun create_hero(name: String, ctx: &mut TxContext) {
        let hero = Hero {
            id: object::new(ctx),
            name: name,
            weapon: option::none(),
        };
        transfer::public_transfer(hero, tx_context::sender(ctx));
    }

    // Forge Sword (With 4 stats)
    public entry fun forge_sword(
        strength: u64, 
        agility: u64, 
        hp: u64, 
        crit_chance: u64, 
        ctx: &mut TxContext
    ) {
        let sword = Sword {
            id: object::new(ctx),
            strength: strength,
            agility: agility,
            hp: hp,
            crit_chance: crit_chance
        };
        transfer::public_transfer(sword, tx_context::sender(ctx));
    }

    // Equip Sword
    public entry fun equip_sword(hero: &mut Hero, sword: Sword, _ctx: &mut TxContext) {
        if (option::is_some(&hero.weapon)) {
            let old_sword = option::extract(&mut hero.weapon);
            transfer::public_transfer(old_sword, tx_context::sender(_ctx));
        };
        option::fill(&mut hero.weapon, sword);
    }
}