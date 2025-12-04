"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import { useEffect, useLayoutEffect, useRef } from "react";
import useWindowSize from "../../lib/utils/hooks/useWindowSize";
import cn from "../../lib/utils/restParameter_cn";

gsap.registerPlugin(ScrollTrigger);
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const AnimatedLetters = () => {
  const lettersRef = useRef<HTMLDivElement>(null);

  const md = true;
  const { clientWidth } = useWindowSize();

  //large
  useIsomorphicLayoutEffect(() => {
    const text = new SplitType("#target", { types: "lines" });
    const ctx = gsap.context(() => {
      gsap.utils.toArray<Element>(".line").forEach((line) => {
        gsap.to(line, {
          backgroundSize: "100% 100%",
          ease: !md ? "" : "power3.out",
          scrollTrigger: {
            trigger: line,
            start: !md ? "top 65%" : `top 60%`,
            end: !md ? `bottom 60%` : "bottom 60%",
            scrub: !md ? 0.6 : 1,
          },
        });
      });
    }, lettersRef);
    const timeoutId = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => {
      clearTimeout(timeoutId);
      ctx.revert();
      text.revert();
    };
  }, [clientWidth, md]);

  return (
    <div
      ref={lettersRef}
      className={cn(
        `no-scrollbar paddings-left z-[2] flex flex-col overflow-x-hidden overflow-y-scroll py-[120px] pr-2 
         sm:w-[calc(340/360*100vw)] 
         md:w-[calc(590/768*100vw)] 
         lg:w-[calc(740/1024*100vw)] lg:max-w-[940px] lg:py-[240px] `
      )}
    >
      <div
        id="target"
        className={`break-words font-poly text-[34px] uppercase md:text-[64px] lg:text-[80px] xl:text-[96px] `}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa possimus
        voluptate iusto. Nisi fugit perspiciatis cumque. Nobis, nostrum libero
        esse inventore doloribus voluptates nemo culpa laudantium qui
        consectetur omnis incidunt! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corrupti magnam nihil quisquam iure nam facere
        reprehenderit eos, est vitae maiores quis iusto, dolore atque
        perferendis corporis architecto, velit impedit similique.
      </div>
    </div>
  );
};
