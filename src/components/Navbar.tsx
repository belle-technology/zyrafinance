import { motion } from "framer-motion";
import zyraLogo from "@/assets/zyra-logo.jpeg";

const navItems = ["About", "Roadmap", "Team", "Tokenomics", "Whitepaper"];

const Navbar = () => (
  <motion.nav
    className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0, 0, 1] }}
  >
    <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
      <a href="#" className="flex items-center gap-3 group">
        <img
          src={zyraLogo}
          alt="Zyra"
          className="w-9 h-9 object-contain rounded-lg transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(152_100%_50%/0.3)]"
        />
        <span className="text-foreground font-semibold text-lg tracking-tight">Zyra</span>
      </a>
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-lg hover:bg-foreground/[0.04]"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-brand text-primary bg-primary/10 border border-primary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Presale Coming
        </span>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
