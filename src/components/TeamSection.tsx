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
    description: "Software engineer & original architect behind the Zyra protocol.",
    image: fatimaImg,
  },
  {
    name: "Usman Zayyana",
    role: "Co-Founder & COO",
    description: "Computer science background driving platform strategy & infrastructure.",
    image: usmanImg,
  },
  {
    name: "Sadiq Aminu Safana",
    role: "Co-Founder & CSPO",
    description: "5+ years in crypto — ecosystem development, strategy & community growth.",
    image: sadiqImg,
  },
  {
    name: "Abbas Zakariya",
    role: "Technical Co-Founder",
    description: "Engineering architect building core infrastructure & smart contracts.",
    image: abbasImg,
  },
];

const TeamSection = () => (
  <section id="team" className="relative py-28 md:py-40 px-6 md:px-16 lg:px-24">
    <motion.div
      className="relative max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
    >
      <div className="text-center mb-16">
        <span className="inline-flex px-3 py-1 rounded-full text-xs font-mono-brand text-primary bg-primary/[0.08] border border-primary/15 mb-6">
          TEAM
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter-custom text-foreground mb-4">
          Built by <span className="gradient-text">Builders</span>
        </h2>
        <p className="text-muted-foreground text-base max-w-lg mx-auto">
          A lean founding team from Nigeria on a mission to bring world-class DeFi to Africa
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {team.map((member, i) => (
          <motion.div
            key={member.name}
            className="group text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl mx-auto mb-4 overflow-hidden border border-foreground/[0.08] group-hover:border-primary/20 transition-all duration-300 relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-0.5">{member.name}</h3>
            {member.alias && (
              <span className="text-[10px] text-primary/50 font-mono-brand block mb-1">"{member.alias}"</span>
            )}
            <span className="text-[10px] text-primary/70 font-mono-brand uppercase tracking-wider block mb-2">
              {member.role}
            </span>
            <p className="text-[11px] text-muted-foreground/50 leading-relaxed">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default TeamSection;
