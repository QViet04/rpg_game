module rpg_game::hero_shop {
    use iota::display;
    use iota::object;
    use iota::object::UID;
    use iota::package;
    use iota::transfer;
    use iota::tx_context;
    use iota::tx_context::TxContext;
    use std::option::{Self, Option};
    use std::string::{Self, String};

    /// Hero resource with optional wrapped Sword and displayable image URL.
    public struct Hero has key, store {
        id: UID,
        name: String,
        img_url: String,
        weapon: Option<Sword>,
    }

    /// Sword resource with basic stats and image URL.
    public struct Sword has key, store {
        id: UID,
        img_url: String,
        strength: u64,
        agility: u64,
        hp: u64,
        crit_chance: u64,
    }

    /// Phantom resource used for package initialization.
    public struct HERO_SHOP has drop {}

    /// Initialize display metadata for Hero NFTs.
    fun init(otw: HERO_SHOP, ctx: &mut TxContext) {
        let publisher = package::claim(otw, ctx);

        let keys = vector[
            string::utf8(b"name"),
            string::utf8(b"image_url"),
            string::utf8(b"description"),
        ];

        let values = vector[
            string::utf8(b"{name}"),
            string::utf8(b"{img_url}"),
            string::utf8(b"A legendary NFT from IOTA RPG Game!"),
        ];

        let mut display = display::new_with_fields<Hero>(&publisher, keys, values, ctx);
        display::update_version(&mut display);

        transfer::public_transfer(publisher, tx_context::sender(ctx));
        transfer::public_transfer(display, tx_context::sender(ctx));
    }

    /// Create a new Hero with an image URL.
    public entry fun create_hero(name: String, img_url: String, ctx: &mut TxContext) {
        let hero = Hero {
            id: object::new(ctx),
            name,
            img_url,
            weapon: option::none(),
        };
        transfer::public_transfer(hero, tx_context::sender(ctx));
    }

    /// Forge a Sword with stats and image URL.
    public entry fun forge_sword(
        img_url: String,
        strength: u64,
        agility: u64,
        hp: u64,
        crit_chance: u64,
        ctx: &mut TxContext,
    ) {
        let sword = Sword {
            id: object::new(ctx),
            img_url,
            strength,
            agility,
            hp,
            crit_chance,
        };
        transfer::public_transfer(sword, tx_context::sender(ctx));
    }

    /// Equip a Sword to a Hero, returning any previously equipped sword to the sender.
    public entry fun equip_sword(hero: &mut Hero, sword: Sword, ctx: &mut TxContext) {
        if (option::is_some(&hero.weapon)) {
            let old_sword = option::extract(&mut hero.weapon);
            transfer::public_transfer(old_sword, tx_context::sender(ctx));
        };
        option::fill(&mut hero.weapon, sword);
    }
}