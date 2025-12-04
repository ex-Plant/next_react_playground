import cn from "../../../lib/utils/restParameter_cn";

//Adjust grid according to your grid vals, remove gaps if necessary

export const GridVisualHelperRow = ({ className }: { className?: string }) => {
  return (
    <div className={cn(`col-span-1 border border-r`, className)}>
      <div className={`h-full bg-red-500/10`}></div>
    </div>
  );
};

export const GridVisualHelper = () => {
  return (
    <div
      className={`grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 paddings fixed inset-0 z-10000  gap-4 md:gap-5 pointer-events-none`}
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
  );
};
