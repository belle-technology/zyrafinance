import { motion } from "framer-motion";
import { useState } from "react";
import zyraLogo from "@/assets/zyra-logo-new.png";

const navItems = ["About", "Roadmap", "Team", "Tokenomics", "Whitepaper"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-foreground/[0.06]" />
      <div className="relative max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-12">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={zyraLogo}
            alt="Zyra"
            className="w-8 h-8 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_hsl(152_100%_50%/0.4)]"
          />
          <span className="text-foreground font-semibold text-lg tracking-tight">Zyra</span>
        </a>
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-3.5 py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-foreground/[0.04]"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono-brand text-primary bg-primary/[0.08] border border-primary/15">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Presale Coming
          </span>
          <button
            className="md:hidden w-8 h-8 flex items-center justify-center text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden relative bg-background/95 backdrop-blur-xl border-b border-foreground/[0.06] px-6 py-4 space-y-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
