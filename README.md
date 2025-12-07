# 🛡️ IOTA RPG Game – Hero & Sword NFT Module

Move Smart Contract for Hero Creation, Weapon Forging, and Equip System

This package implements a simple but expandable **RPG-style NFT system** on the **IOTA MoveVM**.
Players can **mint Heroes**, **forge Swords**, and **equip weapons** using on-chain logic.
It also includes metadata configuration for NFT display.

---

## 🚀 Features

### ✅ **Hero NFTs**

* Each Hero is a `key + store` Move object.
* Contains:

  * Name
  * Image URL
  * Optional equipped **Sword**
  * Unique ID (UID)

### ⚔️ **Sword NFTs**

* Each Sword is a separate on-chain object.
* Stats include:

  * `strength`
  * `agility`
  * `hp`
  * `crit_chance`
  * Image URL

### 🎨 **Display Metadata (init)**

The `init` function registers display fields so wallets & explorers can render NFTs:

* name
* image_url
* description

### 🔧 **Equip System**

Players can equip swords onto Heroes:

* If a Hero already has a sword → the old sword is returned to the user.
* The new sword is slotted instantly.

---

## 📦 Module Overview

```
module rpg_game::hero_shop
```

Contains:

* `Hero` struct
* `Sword` struct
* `HERO_SHOP` (phantom resource for initialization)
* Functions to create heroes, forge swords, equip weapons

---

## 📝 Functions

### 1️⃣ **init(otw, ctx)**

Initializes display metadata for Hero NFTs.
Called once per package deployment.

### 2️⃣ **create_hero(name, img_url, ctx)**

Mints a Hero NFT to the transaction sender.

```move
public entry fun create_hero(name: String, img_url: String, ctx: &mut TxContext)
```

### 3️⃣ **forge_sword(img_url, strength, agility, hp, crit_chance, ctx)**

Creates a Sword NFT with specific stats.

### 4️⃣ **equip_sword(&mut Hero, Sword, ctx)**

her", "https://example.com/hero.png")
```

### 2. Forge a Sword

```
forge_sword("https://example.com/sword.png", 50, 20, 120, 10)
```

### 3. Equip the Sword

```
equip_sword(&mut hero, sword)
```

---

## 💡 Notes for Developers

* All items are transferred to `tx_context::sender(ctx)`.
* Using `Option<Sword>` allows Heroes to equip/unequip cleanly.
* Metadata uses IOTA’s `display::new_with_fields`.

-

If you want, I can also:
✅ generate badges
✅ create a full folder structure
✅ add example transactions
✅ write documentation comments for all functions

Just tell me!

export const DEVNET_PACKAGE_ID = "0x8a1a3d2320b54b53daba0a29a2daf5f76ae52c42337e15648ee99df336e1eb3f"
export const TESTNET_PACKAGE_ID = "0x352a4291d74723c67bbe23d5bfe1289e3a2932baa09b15b489d73e9fefbb0275"
