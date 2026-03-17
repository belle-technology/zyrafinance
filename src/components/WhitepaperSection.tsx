import { motion } from "framer-motion";

const WhitepaperSection = () => (
  <section className="py-32 md:py-48 px-6 md:px-16 lg:px-24">
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0, 1] }}
    >
      <div className="card-surface card-surface-hover aspect-video flex flex-col items-center justify-center p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter-custom text-foreground mb-4">
          Whitepaper
        </h2>
        <p className="text-muted-foreground text-lg mb-10">
          Full whitepaper coming soon
        </p>
        <div className="flex gap-4">
          <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm text-muted-foreground"
            style={{ boxShadow: "inset 0 0 0 1px hsl(0 0% 100% / 0.1)" }}>
            View Whitepaper
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm text-muted-foreground"
            style={{ boxShadow: "inset 0 0 0 1px hsl(0 0% 100% / 0.1)" }}>
            Download PDF
          </span>
        </div>
      </div>
    </motion.div>
  </section>
);

export default WhitepaperSection;
