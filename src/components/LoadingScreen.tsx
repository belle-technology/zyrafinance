import { motion, AnimatePresence } from "framer-motion";
import zyraLogo from "@/assets/zyra-logo.jpeg";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] }}
        >
          {/* Pulsing ring */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: 140,
                height: 140,
                top: -6,
                left: -6,
                border: "1px solid hsl(152 100% 50% / 0.2)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src={zyraLogo}
              alt="Zyra"
              className="w-32 h-32 object-contain rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{
                filter: "drop-shadow(0 0 40px hsl(152 100% 50% / 0.3))",
              }}
            />
          </div>
          <motion.p
            className="mt-8 text-xs font-mono-brand text-muted-foreground tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Loading
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
