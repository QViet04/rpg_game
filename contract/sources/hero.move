module rpg_game::hero_shop {
    use iota::object::{Self, UID};
    use iota::tx_context::{Self, TxContext};
    use iota::transfer;
    use iota::package;
    use iota::display;
    use std::string::{Self, String};

    // --- 1. DATA STRUCTURES (Thêm img_url) ---

    public struct Hero has key, store {
        id: UID,
    public struct Hero has key, store {
        id: UID,
        name: String,
        img_url: String, // Mới: Link ảnh Hero
        weapon: Option<Sword>, 
    }
    public struct Sword has key, store {
        id: UID,
        img_url: String, // Mới: Link ảnh Kiếm
        strength: u64,   
        agility: u64,    
        hp: u64,         
        crit_chance: u64 
    }

    public struct HERO_SHOP has drop {}

    fun init(otw: HERO_SHOP, ctx: &mut TxContext) {
        let publisher = package::claim(otw, ctx);

        // --- CẤU HÌNH HIỂN THỊ (DISPLAY STANDARD) ---
        // Đây là phép màu giúp Ví và Web hiện ảnh tự động
        let keys = vector[
            string::utf8(b"name"),
            string::utf8(b"image_url"), // Key chuẩn quốc tế
            string::utf8(b"description"),
        ];

        let values = vector[
            string::utf8(b"{name}"),
            string::utf8(b"{img_url}"), // Lấy dữ liệu từ field img_url trong struct
            string::utf8(b"A legendary NFT from IOTA RPG Game!"),
        ];

        let mut display = display::new_with_fields<Hero>(
            &publisher, keys, values, ctx
        );
        display::update_version(&mut display);

        // (Tạm thời Sword dùng chung cấu hình hiển thị đơn giản hoặc làm tương tự Hero nếu muốn kỹ hơn)
        // Ở đây mình làm gọn cho Hero trước.

        transfer::public_transfer(publisher, tx_context::sender(ctx));
        transfer::public_transfer(display, tx_context::sender(ctx));
    }

    // --- 2. FUNCTIONS (Updated) ---

    // Create Hero (Thêm tham số img_url)
    public entry fun create_hero(name: String, img_url: String, ctx: &mut TxContext) {
    public entry fun create_hero(name: String, img_url: String, ctx: &mut TxContext) {
            id: object::new(ctx),
            name: name,
            img_url: img_url, // Lưu link ảnh
            img_url: img_url, // Lưu link ảnh
            weapon: option::none(),
        };
        transfer::public_transfer(hero, tx_context::sender(ctx));
    }

    // Forge Sword (Thêm tham số img_url)
    public entry fun forge_sword(
        img_url: String, // Nhận link ảnh kiếm
        strength: u64, 
        agility: u64, 
        hp: u64, 
        crit_chance: u64, 
        ctx: &mut TxContext
    ) {
        let sword = Sword {
            id: object::new(ctx),
            img_url: img_url,
            strength: strength,
            agility: agility,
            hp: hp,
            crit_chance: crit_chance
        };
        transfer::public_transfer(sword, tx_context::sender(ctx));
    }

    // Equip Sword (Giữ nguyên)
    public entry fun equip_sword(hero: &mut Hero, sword: Sword, _ctx: &mut TxContext) {
        if (option::is_some(&hero.weapon)) {
            let old_sword = option::extract(&mut hero.weapon);
            transfer::public_transfer(old_sword, tx_context::sender(_ctx));
        };
        option::fill(&mut hero.weapon, sword);
    }
}