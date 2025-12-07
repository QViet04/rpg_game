# IOTA RPG Game Starter

A beginner-friendly Next.js project template for building an RPG Game (Hero & Sword) on the IOTA network using Move smart contracts.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Deploy Contract (Manual Method)
cd contract

# Important: Clear old build cache to avoid path conflicts
rm -rf build Move.lock

# Publish code to Devnet
iota client publish --gas-budget 50000000
cd ..

# 3. Run the website
npm run dev
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