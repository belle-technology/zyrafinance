import { motion } from "framer-motion";

const chapters = [
  "Introduction",
  "Problems",
  "Zyra Solutions",
  "Zyra Platform",
  "Tokenomics (ZRA)",
  "Governance",
  "Roadmap",
  "Security",
  "Team",
];

const WhitepaperSection = () => (
  <section id="whitepaper" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <div className="text-center mb-12">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/10 border border-primary/20 mb-6">
          DOCUMENTATION
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
          <span className="gradient-text">Whitepaper</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Deep dive into Zyra's architecture, tokenomics, and vision — Version 1.0
        </p>
      </div>

      <div className="card-surface glow-border relative overflow-hidden p-10 md:p-14">
        <div
          className="absolute -bottom-20 -left-20 w-60 h-60 pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(152 100% 50% / 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col md:flex-row gap-10">
          {/* Document preview */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-48 aspect-[3/4] rounded-2xl bg-foreground/[0.03] border border-foreground/[0.08] flex flex-col p-5 gap-2 relative overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <svg className="w-4 h-4 text-primary/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-[10px] font-mono-brand text-primary/50 font-semibold">ZYRA</span>
              <span className="text-[8px] font-mono-brand text-muted-foreground/40">WHITEPAPER v1.0</span>
              <div className="mt-auto space-y-1">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-[2px] rounded-full bg-foreground/[0.04]" style={{ width: `${80 - i * 8}%` }} />
                ))}
              </div>
              <div className="absolute top-0 right-0 w-8 h-8">
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-foreground/[0.06]" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-lg font-semibold text-foreground mb-1">Zyra Whitepaper v1.0</h3>
            <p className="text-sm text-muted-foreground mb-5">
              Decentralized Exchange Infrastructure for Africa — a comprehensive guide to Zyra's protocol, tokenomics, governance, and roadmap.
            </p>

            <div className="mb-6">
              <span className="text-[10px] font-mono-brand text-muted-foreground/50 uppercase tracking-widest mb-3 block">Contents</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                {chapters.map((ch, i) => (
                  <span key={ch} className="text-xs text-muted-foreground/60 font-mono-brand">
                    {i + 1}. {ch}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <a
                href="/ZYRA_WHITEPAPER.docx"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm text-primary-foreground bg-primary hover:bg-primary/90 transition-all duration-300 font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Whitepaper
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

export default WhitepaperSection;
