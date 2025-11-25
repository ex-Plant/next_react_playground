"use client";

import { twMerge } from "tailwind-merge";
import { useDebugTools } from "./useDebugTools";
import { GridVisualHelper } from "./GridVisualHelper";

type RootLayoutDebugWrapperPropsT = {
  children: React.ReactNode;
};

//todo remove on prod!!

export const RootLayoutDebugWrapper = ({
  children,
}: RootLayoutDebugWrapperPropsT) => {
  const { layersVisible, outlinesVisible, gridVisible } = useDebugTools();

  return (
    <>
      {gridVisible && <GridVisualHelper />}
      <div
        className={twMerge(
          outlinesVisible && `[&_*]:outline [&_*]:outline-lime-300`,
          layersVisible && `[&_*]:bg-[hsl(0_100%_50%_/_0.1)]`
        )}
      >
        {children}
      </div>
    </>
  );
};
