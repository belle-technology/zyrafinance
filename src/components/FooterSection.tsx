import { motion } from "framer-motion";
import zyraLogo from "@/assets/zyra-logo-new.png";

const FooterSection = () => (
  <footer className="relative py-20 px-6 md:px-16 lg:px-24">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="max-w-7xl mx-auto">
      <motion.div
        className="flex flex-col items-center text-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={zyraLogo}
          alt="Zyra"
          className="w-10 h-10 object-contain opacity-60"
        />
        <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
          Building the future of decentralized finance — secure, transparent, and accessible for everyone.
        </p>
        <div className="flex items-center gap-6 mt-2">
          {["About", "Roadmap", "Team", "Tokenomics", "Whitepaper"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] text-muted-foreground/40 hover:text-foreground transition-colors duration-300 font-mono-brand"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="w-full max-w-sm h-[1px] bg-foreground/[0.04] mt-4" />
        <p className="text-[11px] text-muted-foreground/30 font-mono-brand">
          © 2025 Zyra Finance. All rights reserved.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default FooterSection;
