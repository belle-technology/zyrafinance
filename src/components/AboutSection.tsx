import { motion } from "framer-motion";

const AboutSection = () => (
  <section className="py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <motion.div
      className="max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <h2 className="text-3xl md:text-4xl font-medium tracking-tighter-custom text-foreground mb-8">
        About Zyra
      </h2>
      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
        Zyra is a non-custodial decentralized exchange designed to provide secure,
        transparent, and accessible trading infrastructure for global users.
      </p>
    </motion.div>
  </section>
);

export default AboutSection;
