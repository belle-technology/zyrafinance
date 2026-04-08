import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const whitepaperContent = [
  {
    id: "intro",
    title: "1. Introduction",
    content: `Zyra is a decentralized cryptocurrency exchange (DEX) designed to provide secure, transparent, and non-custodial digital asset trading for users in Nigeria, across Africa, and globally.

Traditional cryptocurrency exchanges operate under custodial models where users deposit funds into wallets controlled by the exchange. This structure introduces significant risks including security breaches, insolvency exposure, regulatory seizure, and internal mismanagement.

Zyra eliminates these risks by operating through blockchain-based smart contracts that allow users to trade directly from their own wallets while maintaining full control of their private keys. The goal of Zyra is to build a secure, scalable, and community-driven decentralized trading infrastructure that enables individuals in emerging markets to access global digital financial systems without relying on centralized intermediaries.

Zyra is designed not only as an exchange, but as a long-term Web3 financial gateway for Africa.`,
  },
  {
    id: "problems",
    title: "2. Problems",
    content: `2.1 Centralization Risk
Most exchanges hold user funds in centralized wallets, creating risks such as single points of failure, large-scale hacks, exchange insolvency, government shutdowns, and internal fund mismanagement.

2.2 High Trading Fees
Many exchanges charge multiple fees including trading commissions, withdrawal fees, spread markups, and conversion costs — significantly reducing trader profitability.

2.3 Poor Optimization for African Markets
Most platforms are designed for Western markets and fail to consider mobile-first internet usage, lower bandwidth environments, regional accessibility, and localized education and onboarding.

2.4 Lack of Transparency and Trust
Users often cannot verify exchange reserves, internal trading systems, or governance decisions. This lack of transparency creates distrust in crypto platforms.`,
  },
  {
    id: "solutions",
    title: "3. Zyra Solutions",
    content: `Zyra addresses these problems through a decentralized and transparent exchange architecture.

Non-Custodial Trading — Users trade directly from their wallets through smart contracts, ensuring they never lose custody of their assets.

Lower Fees — Efficient on-chain infrastructure reduces trading costs, passing savings directly to traders.

Mobile-First Platform — The exchange is optimized for emerging market users, built for low-bandwidth environments and mobile devices.

Transparent Governance — Zyra introduces DAO-based governance where the community can directly influence protocol decisions.`,
  },
  {
    id: "platform",
    title: "4. Zyra Platform",
    content: `Zyra is a decentralized digital asset exchange protocol that enables peer-to-peer cryptocurrency trading without centralized custody.

Matching Engine
Zyra utilizes a hybrid on-chain/off-chain matching engine architecture designed to balance performance, scalability, and decentralization.

Off-Chain Order Matching Layer — High-speed order matching, low latency execution, and order book management.

On-Chain Settlement Layer — Final trade execution via smart contracts with full transparency and auditability.

Liquidity Layer — Integrated liquidity pools, market maker participation, and slippage optimization.

Core Features: Spot trading, liquidity pools, staking and yield mechanisms, referral reward system, DAO governance voting, AI trading tools, and cross-chain integration.

AI-Powered Features include an AI Trading Assistant, AI Liquidity Optimization, AI Fraud Detection, AI Risk Analysis, and AI Portfolio Insights.

Initial coin listings: BTC, ETH, USDT, BNB, and ZRA. Additional tokens may be listed based on security, liquidity, and community demand.`,
  },
  {
    id: "tokenomics",
    title: "5. Zyra Token (ZRA)",
    content: `ZRA is the native utility token powering the Zyra ecosystem. The total supply is fixed at 170,000,000 ZRA.

Token Utility: Paying trading fees, fee discounts, DAO governance voting, staking rewards, liquidity incentives, and referral rewards.

Token Allocation:
• Public Sale (ICO) — 40% — 68,000,000 ZRA
• Liquidity Mining — 30% — 51,000,000 ZRA
• Airdrops (User Growth) — 15% — 25,500,000 ZRA
• Staking Rewards — 10% — 17,000,000 ZRA
• Referral Rewards — 5% — 8,500,000 ZRA

ZRA Token Pricing:
• Presale: $0.20
• ICO Stage 1: $0.30
• Public Listing: Market Price

Zyra implements a structured buyback and burn mechanism to systematically reduce circulating supply over time and strengthen long-term value alignment.`,
  },
  {
    id: "security",
    title: "6. Security",
    content: `Security is a foundational priority for Zyra.

Cryptographic Standards — Zyra utilizes SHA-256 hashing for data integrity, transaction verification, and secure hashing processes.

Post-Quantum Security — Zyra's long-term security roadmap considers integration of post-quantum cryptographic standards.

Multi-Layer Security Framework:
• Smart Contract Audits — Independent third-party security audits prior to deployment
• Multi-Signature Treasury Management — Preventing unilateral control of funds
• Penetration Testing — Periodic security assessments
• Bug Bounty Programs — Structured vulnerability discovery initiatives
• Continuous Monitoring — Automated real-time threat detection`,
  },
  {
    id: "governance",
    title: "7. Governance",
    content: `Zyra will implement a DAO governance model where ZRA token holders can participate in protocol decision-making.

The governance framework includes proposal submission, community voting, and transparent execution of approved decisions. This ensures the platform evolves according to the collective will of its community.`,
  },
  {
    id: "roadmap",
    title: "8. Roadmap",
    content: `Phase 0 (2025) — ZRA Token Development & Smart Contract Initialization ✓
Phase 1 (June 2026) — First Presale Launch
Phase 2 (Q3 2026) — MVP Release
Phase 3 (Q4 2026) — Public ICO & Token Distribution
Phase 4 (Q4 2026) — Testnet Launch
Phase 5 (Q1 2027) — Mainnet Exchange Launch
Phase 6 (Q1–Q2 2027) — Mobile Applications (iOS & Android)
Phase 7 (Q2 2027) — DAO Governance Activation
Phase 8 (Q3–Q4 2027) — Cross-Chain Integration & Liquidity Expansion
Phase 9 (2028) — Advanced AI Trading & Automation Systems`,
  },
  {
    id: "team",
    title: "9. Founding Team",
    content: `Fatima Yusuf Adam — Founder & CEO
Visionary leader and original architect behind the Zyra protocol. Software engineer focused on blockchain systems and decentralized applications.

Usman Zayyana Shehu — Co-Founder
Background in computer applications and digital technology systems, contributing to platform technological strategy and infrastructure design.

Sadiq Aminu Safana — Co-Founder & CSPO
Over five years of experience in the cryptocurrency ecosystem, focusing on ecosystem development, market strategy, and community growth.

Abbas Zakariya — Technical Co-Founder
Engineering architect building the core infrastructure and smart contract systems powering Zyra.`,
  },
  {
    id: "disclaimer",
    title: "10. Legal Disclaimer",
    content: `This whitepaper is for informational purposes only and does not constitute financial, investment, legal, or tax advice. The information contained herein is subject to change without notice. Participation in the Zyra ecosystem involves significant risk, including the potential loss of capital. Prospective participants should conduct their own independent research and consult with qualified professionals before making any decisions.`,
  },
];

const WhitepaperSection = () => {
  const [activeChapter, setActiveChapter] = useState<string | null>(null);

  return (
    <section id="whitepaper" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
      >
        <div className="text-center mb-16">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/[0.08] border border-primary/15 mb-6">
            DOCUMENTATION
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
            <span className="gradient-text">Whitepaper</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Zyra Protocol — Version 1.0
          </p>
        </div>

        {/* Chapter list */}
        <div className="space-y-1">
          {whitepaperContent.map((chapter, i) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <button
                onClick={() => setActiveChapter(activeChapter === chapter.id ? null : chapter.id)}
                className="w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group hover:bg-foreground/[0.03]"
                style={{
                  background: activeChapter === chapter.id
                    ? "linear-gradient(135deg, hsl(0 0% 100% / 0.04), hsl(0 0% 100% / 0.01))"
                    : undefined,
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-mono-brand text-primary/40 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm font-medium transition-colors duration-200 ${
                    activeChapter === chapter.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                  }`}>
                    {chapter.title}
                  </span>
                </div>
                <motion.svg
                  className="w-4 h-4 text-muted-foreground/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: activeChapter === chapter.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {activeChapter === chapter.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-16">
                      <div className="text-sm text-muted-foreground/70 leading-[1.8] whitespace-pre-line">
                        {chapter.content}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhitepaperSection;
