import { motion } from "framer-motion";
import type { ReactNode } from "react";

const tide = [0.22, 1, 0.36, 1] as const;

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <>
      <motion.div
        className="horizon-wipe"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.85, ease: tide }}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.5, delay: 0.32, ease: tide }}
      >
        {children}
      </motion.div>
    </>
  );
}
