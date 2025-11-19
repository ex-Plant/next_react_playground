"use client";

import { AnimatedImgFlexBasis } from "@/components/6_tailwindTricks/AnimatedImgFlexBasis";
import FancyBlurredBgc from "@/app/components/6_tailwindTricks/FancyBlurredBgc";

const dummyList = Array.from({ length: 20 });

const AnimatedImagesList = () => {
  return (
    <>
      <FancyBlurredBgc />
      <section
        className={`h-full grow flex flex-1  flex-wrap gap-4 justify-center py-10 py-[50vw]`}
      >
        {dummyList.map((_, i) => (
          <div key={i}>
            <AnimatedImgFlexBasis key={i} />
          </div>
        ))}
      </section>
    </>
  );
};

export default AnimatedImagesList;
