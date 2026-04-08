import { motion } from "framer-motion";
import fatimaImg from "@/assets/team-fatima.png";
import usmanImg from "@/assets/team-usman.jpeg";
import sadiqImg from "@/assets/team-sadiq.jpeg";
import abbasImg from "@/assets/team-abbas.jpeg";

const team = [
  {
    name: "Fatima Yusuf Adam",
    alias: "Zahra",
    role: "Founder & CEO",
    description: "Visionary leader driving Zyra's mission to democratize DeFi access across Africa.",
    image: fatimaImg,
  },
  {
    name: "Usman Zayyana",
    role: "Co-Founder & COO",
    description: "Operations strategist ensuring seamless execution from product to market launch.",
    image: usmanImg,
  },
  {
    name: "Sadiq Aminu Safana",
    role: "Co-Founder & CSPO",
    description: "Strategy & partnerships officer building the ecosystem connections that fuel Zyra's growth.",
    image: sadiqImg,
  },
  {
    name: "Abbas Zakariya",
    role: "Technical Co-Founder",
    description: "Engineering architect building the core infrastructure and smart contract systems powering Zyra.",
    image: abbasImg,
  },
];

const TeamSection = () => (
  <section id="team" className="relative py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <div
      className="absolute top-1/2 right-0 w-[400px] h-[400px] pointer-events-none"
      style={{
        background: "radial-gradient(circle, hsl(152 100% 50% / 0.03) 0%, transparent 70%)",
      }}
    />

    <motion.div
      className="relative max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <div className="text-center mb-20">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/10 border border-primary/20 mb-6">
          THE TEAM
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
          Built by <span className="gradient-text">Builders</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          A lean, ambitious founding team from Nigeria on a mission to bring world-class DeFi to Africa
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            className="card-surface glow-border p-6 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.2, 0, 0, 1] }}
          >
            {/* Photo */}
            <div className="w-24 h-24 rounded-2xl mx-auto mb-5 overflow-hidden border-2 border-primary/20 relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">{member.name}</h3>
            {member.alias && (
              <span className="text-xs text-primary/60 font-mono-brand mb-2 block">"{member.alias}"</span>
            )}
            <span className="text-[11px] text-primary font-mono-brand uppercase tracking-wider block mb-3">
              {member.role}
            </span>
            <p className="text-xs text-muted-foreground leading-relaxed">{member.description}</p>

            <div
              className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle, hsl(152 100% 50% / 0.06) 0%, transparent 70%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default TeamSection;
