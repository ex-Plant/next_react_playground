"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { twMerge } from "tailwind-merge";

import { financePageData } from "@/app/(elastic)/financeTempData";
import { livingPageData } from "@/app/(elastic)/livingTempData";
import { optimumPageData } from "@/app/(elastic)/optimumTempData";
import { AnimatedTextSection } from "@/components/common/animatedTextSection/AnimatedTextSection";
import { FlexibleContentPost } from "@/components/common/flexibleContent/FlexibleContent";
import { NavBarWithPageRouting } from "@/components/common/navigationBar/NavBarWithPageRouting";
import { ObjectsSlider } from "@/components/common/objectsSlider/ObjectsSlider";
import { PageWrapper } from "@/components/common/pageWrapper/PageWrapper";
import { TopSectionVideoImg } from "@/components/common/topSectionVideoImg/TopSectionVideoImg";
import { ObjectContactInfoSection } from "@/components/elastic/ObjectContactSection/ObjectContactInfoSection";
import { ContactForm } from "@/components/elastic/contactForm/ContactForm";
import { GlobalContactInfoSection } from "@/components/elastic/contactInfoSection/ContactInfoSection";
import { ObjectDescription } from "@/components/elastic/objectDescription/ObjectDescription";
import { ElasticImagesHorizontalVertical } from "@/components/elastic/objectElasticImagesSection/ElasticImagesHorizontalVertical";
import { ElasticImagesSingleFullScreen } from "@/components/elastic/objectElasticImagesSection/ElasticImagesSingleFullScreen";
import { ElasticImagesSingleWithMargin } from "@/components/elastic/objectElasticImagesSection/ElasticImagesSingleWithMargin";
import { ElasticImagesHorizontalHorizontal } from "@/components/elastic/objectElasticImagesSection/elasticImagesHorizontalHorizontal/ElasticImagesHorizontalHorizontal";
import { ObjectFeaturesList } from "@/components/elastic/objectFeatures/ObjectFeaturesList";
import { ObjectLocation } from "@/components/elastic/objectLocation/ObjectLocation";
import { ScrollToTop } from "@/components/helpers/scrollToTop/ScrollToTop";
import { ObjectTopSection } from "@/components/pageTemplates/object/objectTopSection/ObjectTopSection";
import { getBgColor } from "@/utils/helpers/getBgColor";
import { usePathStore } from "@/utils/stores/usePathStore";
import {
  ElasticTemplateCommonT,
  MainCategories,
} from "@/utils/types/pageTemplatesTypes/templateElasticTypes";

gsap.registerPlugin(ScrollTrigger);

export const ElasticClientLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // todo once we have real data change logic

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;
  const bgcRef = useRef(null);
  const bgcContainer = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(bgcRef.current, {
        backgroundColor: `transparent`,
        scrollTrigger: {
          trigger: bgcContainer.current,
          start: "top top",
          end: "bottom+=200% top",
          scrub: 1,
          // markers: true,
          // once: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={bgcRef} className={`bg-red-900`}>
        <div className={`h-[200vh]`} ref={bgcContainer}></div>

        {children}
      </div>
    </>
  );
};
