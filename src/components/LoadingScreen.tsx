import { motion, AnimatePresence } from "framer-motion";
import zyraLogo from "@/assets/zyra-logo.png";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
        >
          <motion.img
            src={zyraLogo}
            alt="Zyra"
            className="w-32 h-32 object-contain"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            style={{
              filter: "drop-shadow(0 0 30px hsl(152 100% 50% / 0.4))",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
