import { motion } from "framer-motion";
import zyraLogo from "@/assets/zyra-logo.jpeg";

const FooterSection = () => (
  <footer className="relative py-20 px-6 md:px-16 lg:px-24">
    {/* Top border glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

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
          className="w-12 h-12 object-contain rounded-xl opacity-70"
        />
        <p className="text-muted-foreground text-sm max-w-md">
          Building the future of decentralized finance — from Africa to the world.
        </p>
        <div className="flex items-center gap-6 mt-2">
          {["About", "Roadmap", "Tokenomics", "Whitepaper"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs text-muted-foreground/50 hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="w-full h-[1px] bg-foreground/[0.05] mt-6" />
        <p className="text-xs text-muted-foreground/40 font-mono-brand">
          © 2025 Zyra. All rights reserved.
        </p>
      </motion.div>
    </div>
  </footer>
);

export default FooterSection;
