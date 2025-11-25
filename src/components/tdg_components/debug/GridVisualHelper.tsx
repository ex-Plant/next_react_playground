import { twMerge } from "tailwind-merge";

export const GridVisualHelperRow = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge(`col-span-1 outline-[0.5px]`, className)}>
      <div className={`h-full bg-red-500/10`}></div>
    </div>
  );
};

export const GridVisualHelper = () => {
  const gridContainerLg =
    "grid grid-cols-6 gap-x-5 md:grid-cols-8 lg:grid-cols-12";

  return (
    <div className={`pointer-events-none`}>
      <div
        className={`grid grid-cols-6 gap-x-5 md:grid-cols-8 lg:grid-cols-12 paddings fixed inset-0 z-[10000] grid gap-4 md:gap-5`}
      >
        <GridVisualHelperRow />
        <GridVisualHelperRow />
        <GridVisualHelperRow />
        <GridVisualHelperRow />
        <GridVisualHelperRow />
        <GridVisualHelperRow />
        <GridVisualHelperRow className={`hidden md:block`} />
        <GridVisualHelperRow className={`hidden md:block`} />
        <GridVisualHelperRow className={`hidden lg:block`} />
        <GridVisualHelperRow className={`hidden lg:block`} />
        <GridVisualHelperRow className={`hidden lg:block`} />
        <GridVisualHelperRow className={`hidden lg:block`} />
      </div>
    </div>
  );
};
