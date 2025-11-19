"use client";

import { AnimatedImgFlexBasis } from "../animated_flex_basis";

const dummyList = Array.from({ length: 20 });

const AnimatedImagesList = () => {
  return (
    <>
      <section
        className={`h-full grow flex flex-1 flex-wrap gap-4 justify-center  py-[50vw]`}
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
