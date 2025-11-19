import cn from "@/lib/utils/restParameter_cn";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

//
//
// **fancy hover effect**
//
// - active happens when you click an image as in the drag event or something like that
//
//   `hover:scale-110 active:scale-[1.02] transition overflow hidden `

// **fancy image background **
// blur original image , low quality
// blur-3xl
// sizes
// (max-width: 1280px: 100vw, 1280px)

export function AnimatedImgFlexBasis() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end center", "end center"],

    //offset: [startOffset, endOffset]
    // first element - target
    // second- container
    // "0 1"
    // "0": The start of the target element.
    // "1": The end of the container (viewport).
    //   Meaning: The scroll progress starts when the top of your element hits the bottom of the viewport.
    // [target, ]

    // "1.5": A point below the target element (1.5 times its height from the top).
    // "1": The end of the container (viewport).
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  /*
  * What it does:

   It maps the scrollYProgress value (which goes from 0 to 1) to a new range for the scale CSS property (from 0.8 to 1).
   When scrollYProgress is 0, scaleProgress will be 0.8.
   When scrollYProgress is 1, scaleProgress will be 1.
   For values in between, it linearly interpolates between 0.8 and 1.
   Why use this?

   This creates a smooth scaling effect:
   The element starts at 80% size when the scroll effect begins.
   It grows to 100% size as the scroll effect completes.
   Summary:
   useTransform is used to map an input range ([0, 1] from scroll) to an output range ([0.8, 1] for scaling), making your animation more visually appealing and controlled.
  * */

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
      // initial={{
      //   scale: scaleProgress,
      // }}
      className={cn(
        ` border border-white relative aspect-square min-h-[200px]
         hover:scale-[105%] transition active:scale-[95%] w-full h-full
     `,
        `basis-[200px] flex-1 `
        // `basis-[200px] flex-0 min-h-[100px]`,
        // `w-[200px]`
      )}
    >
      <Image
        fill
        src={`/images/dummyImg.jpg`}
        alt={`img`}
        className={`object-cover
         
         `}
      />
    </motion.div>
  );
}
