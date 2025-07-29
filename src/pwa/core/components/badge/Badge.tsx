import clsx from "clsx";

export interface IBadgeProps {
  children?: React.ReactNode;
}

export const Badge = ({ children }: IBadgeProps) => {
  return (
    <div
      className={clsx(
        "w-fit",
        "border border-[#CFC4E3]",
        "rounded-[1.5rem]",
        "px-[1rem] py-[0.5rem] sm:px-[1rem] sm:py-[0.75rem]",
        "bg-[#F0ECF64D]",
        "text-[#2A1B45] text-[0.625rem] sm:text-[1rem] font-semibold"
      )}
    >
      {children}
    </div>
  );
};
