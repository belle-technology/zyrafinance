import zyraLogo from "@/assets/zyra-logo.png";

const FooterSection = () => (
  <footer className="py-16 px-6 md:px-16 lg:px-24 border-t border-foreground/[0.07]">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
      <img src={zyraLogo} alt="Zyra" className="w-10 h-10 object-contain opacity-60" />
      <p className="text-muted-foreground text-sm">
        Building the future of decentralized finance
      </p>
    </div>
  </footer>
);

export default FooterSection;
