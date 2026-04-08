import { motion, AnimatePresence } from "framer-motion";
import zyraLogo from "@/assets/zyra-logo-new.png";

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
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: 160,
                height: 160,
                top: -14,
                left: -14,
                border: "1px solid hsl(152 100% 50% / 0.15)",
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.2, 0, 0.2],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                width: 200,
                height: 200,
                top: -34,
                left: -34,
                border: "1px solid hsl(152 100% 50% / 0.08)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0, 0.1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.img
              src={zyraLogo}
              alt="Zyra"
              className="w-32 h-32 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [0.98, 1.02, 0.98],
              }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{
                filter: "drop-shadow(0 0 60px hsl(152 100% 50% / 0.25))",
              }}
            />
          </div>
          <motion.div
            className="mt-10 flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
