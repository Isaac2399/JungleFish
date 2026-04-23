# Jungle Fish Eco-Resort 🌴 – Stellar RWA Implementation

Jungle Fish is an innovative Web3 project bridging **regenerative tourism** and **Real World Assets (RWA)** through the power of the Stellar network. By tokenizing physical infrastructure (eco-cabins, educational facilities, and natural reserves) in Costa Rica, we provide a scalable, eco-friendly model for community-driven investment.

## 🪐 Why Stellar? 
The Jungle Fish ecosystem is built on **Stellar** because our core values of sustainability perfectly match Stellar's carbon-negative architecture. 
- **Lightning-fast settlement:** Users from around the globe can acquire the $JFISH utility token instantly via Lobstr or Freighter.
- **Micro-transaction friendly:** Yield and utility redemptions (via Soroban smart contracts) cost fractions of a cent, allowing micro-distributions to holders.
- **RWA compliance:** Stellar's native asset controls (Trustlines, Authorization flags) give us unparalleled security for managing tokenized real-world yields.

## 🛠 Tech Stack
- **Frontend Framework:** React 18 + Vite (TypeScript)
- **Styling:** TailwindCSS + Framer Motion (Glassmorphism & premium UI)
- **Web3 Integrations (Roadmap):** `@stellar/stellar-sdk` & `@stellar/freighter-api` for Soroban smart contract invocations.
- **Backend Services:** Firebase (Auth, Firestore DB, & Cloud Functions) serving as the exclusive backend architecture.

## 🚀 Quick Start & Deployment

This repository is optimized for one-click deployments on platforms like **Vercel** or **Netlify**.

### Local Setup
```bash
# 1. Install dependencies
npm install

# 2. Add your environment variables (see .env.example)
# Note: No hardcoded secrets are included in this repo.

# 3. Run the development server
npm run dev
```

### Production Build
The repository has been fully audited with 0 TypeScript/ESLint warnings.
```bash
npm run build
```

## 📜 Smart Contract Architecture (Soroban Roadmap)
Our frontend components are already structured to support Soroban calls.
Check out `src/components/BuyModal.tsx` and `src/components/Tokenomics.tsx` for architectural JSDocs describing our AMM liquidity strategies and Freighter transaction signing flows.
