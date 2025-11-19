"use client";

import { motion, useAnimationControls } from "framer-motion";
import React, { useState } from "react";

const FramerAnimationTests = () => {
  const controls = useAnimationControls();
  const [hasAnimated, setHasAnimated] = useState(false);

  const [, setIsHovered] = useState(false);

  //   State-Managed Animation
  const handleHoverStart = async () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      await controls.start({
        opacity: [1, 1, 0],
        scale: [1, 1.5, 2],
        transition: {
          duration: 0.5,
          times: [0, 0.5, 1],
        },
      });
    }
  };

  const animateBackOnClick = async () => {
    if (hasAnimated) {
      await controls.start({
        opacity: [0, 0, 1],
        scale: [2, 1.5, 1],
        transition: {
          delay: 2,
          duration: 0.5,
          times: [0, 0.5, 1],
        },
      });

      console.log(`animated back`);
      setHasAnimated(true);
    }
  };

  // Using animate with hover state (more control)
  const handleHoverStart2 = async () => {
    setIsHovered(true);
    await controls.start({ y: -20, transition: { duration: 0.3 } });
    await controls.start({ x: 20, transition: { duration: 0.3 } });
    await controls.start({ opacity: 0, transition: { duration: 0.2 } });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    });
  };

  return (
    <section
      className={`min-h-screen w-screen py-40 [&_*]:block grid place-items-center `}
    >
      <p> State-Managed Animation </p>
      <motion.button
        onClick={animateBackOnClick}
        className="text-[2.5rem]"
        animate={controls}
        onHoverStart={handleHoverStart}
        onAnimationStart={() => console.log(`start`)}
        onAnimationComplete={() => console.log("complete")}
      >
        🍆
      </motion.button>

      <p> Using animate with hover state (more control) </p>
      <motion.button
        className="text-[2.5rem]"
        animate={controls}
        onHoverStart={handleHoverStart2}
        onHoverEnd={handleHoverEnd}
      >
        💰
      </motion.button>

      <p>Using keyframes animation</p>
      <motion.button
        className="text-[2.5rem]"
        whileHover={{
          opacity: [1, 1, 0], // Stay at 1, then fade to 0
          scale: [1, 1.5, 2],
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.5, 1], // 50% for first move, 100% for second
          },
        }}
      >
        🫥
      </motion.button>

      <p>With reverse</p>
      <motion.button
        className="text-[2.5rem]"
        whileHover={{
          opacity: [1, 0.7, 1],
          scale: [1, 2, 1],
          transition: {
            duration: 0.5,
            times: [0, 0.5, 1], // 50% for first move, 100% for second
          },
        }}
      >
        🚀
      </motion.button>

      <p>Separate Transitions for Each Property</p>
      <motion.button
        className="text-[2.5rem]"
        whileHover={{
          x: 20,
          y: -20,
          opacity: 0,
          transition: {
            y: { delay: 0.0, duration: 0.4 }, // Up movement starts immediately
            x: { delay: 0.4, duration: 0.4 }, // Right movement starts at 0.4s
            opacity: { delay: 0.8, duration: 0.3 }, // Fade starts at 0.8s
          },
        }}
      >
        ⚠️
      </motion.button>

      <p>Alternative: Separate Properties with Different Timing</p>
      <motion.button
        className="text-[2.5rem]"
        whileHover={{
          opacity: 0,
          scale: 2,
          transition: {
            scale: {
              duration: 0.4,
              ease: "easeOut",
            },
            opacity: {
              duration: 0.4,
              delay: 0.2, // Start fading after scale starts
              ease: "easeIn",
            },
          },
        }}
      >
        🍆
      </motion.button>

      <p>If You Want the Sequence to Reverse in Reverse Order</p>
      <motion.button
        className="text-[2.5rem]"
        whileHover={{
          x: [0, 0, 20], // Right movement at end
          y: [0, -20, -20], // Up movement first, stays
          opacity: [1, 1, 0], // Fade at end
          transition: {
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 0.4, 1], // Adjust timing
          },
        }}
      >
        😎
      </motion.button>

      <p>Custom Reversal Timing</p>
      <motion.button
        className="text-[2.5rem]"
        whileHover={{
          opacity: 0,
          scale: 2,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        // This controls the reverse animation
        transition={{
          duration: 0.3, // Faster reverse animation
          ease: "easeOut",
        }}
      >
        🦀
      </motion.button>

      <motion.button
        className="text-[2.5rem]"
        whileHover={{
          scale: 1.1,
          rotate: [0, -10, 10, 0],
          backgroundColor: "#f0f0f0",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
        transition={{
          rotate: {
            duration: 0.6,
            ease: "easeInOut",
          },
        }}
      >
        🍆
      </motion.button>
    </section>
  );
};

export default FramerAnimationTests;
