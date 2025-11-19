"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  // It has to be a default export ❗
  // AnimatePresence is to animate elements when they mount / unmount
  // mode="wait": Waits for exit animation to complete before starting entry animation
  // mode="sync": Entry and exit animations happen simultaneously
  // mode="popLayout": Exit animation happens immediately, entry follows

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
