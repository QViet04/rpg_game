# IOTA RPG Game Starter

A beginner-friendly Next.js project template for building an RPG Game (Hero & Sword) on the IOTA network using Move smart contracts.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

iota client publish --gas-budget 50000000
# 2. Deploy Contract (Manual Method)
cd contract

# Important: Clear old build cache to avoid path conflicts
rm -rf build Move.lock

# Publish code to Devnet
iota client publish --gas-budget 50000000

# Or publish to Testnet
# iota client publish --network testnet --gas-budget 50000000
cd ..

# 3. Run the website
npm run dev

## 🔗 Update package IDs

After publishing, copy the `PackageID` from the CLI output and paste it into `lib/config.ts`:

```ts
export const DEVNET_PACKAGE_ID = "0x8a1a3d2320b54b53daba0a29a2daf5f76ae52c42337e15648ee99df336e1eb3f"
export const TESTNET_PACKAGE_ID = "0x352a4291d74723c67bbe23d5bfe1289e3a2932baa09b15b489d73e9fefbb0275"
```

📚 Documentation
For detailed instructions, please refer to the INSTRUCTION_GUIDE.md file.

🎯 Features
✅ Wallet connection with IOTA dApp Kit

✅ RPG Game Mechanics: Summon Heroes, Forge Swords

✅ Advanced Move Techniques: Equipment System (Object Wrapping)

✅ Modern UI using Radix UI

✅ Full TypeScript support

✅ Error handling and Loading states

📁 Project Structure
Bash

├── app/              # Next.js application directory
├── components/       # React components (Game Dashboard UI)
├── hooks/            # Custom hooks (Hero & Sword logic handling)
├── lib/              # Configuration files
└── contract/         # Move contracts (Hero Module)
📚 Learn More
IOTA Documentation

IOTA dApp Kit

Next.js Documentation

📄 License
MIT