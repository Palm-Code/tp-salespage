import clsx from "clsx";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface WhatYouGetCardHomeProps {
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title?: string;
  description?: string;
}

export const WhatYouGetCardHome = ({
  icon: Icon,
  title,
  description,
}: WhatYouGetCardHomeProps) => {
  return (
    <div
      className={clsx(
        "grid grid-flow-row grid-cols-1 sm:grid-cols-none sm:grid-flow-col place-content-start place-items-start gap-[1rem]",
        "w-full",
        "px-[1rem] py-[1.5rem] sm:px-[1.5rem] sm:py-[1.5rem]",
        "bg-[#FFFFFF80]",
        "rounded-[0.5rem]"
      )}
      style={{
        backdropFilter: "blur(4px)",
      }}
    >
      {Icon && <Icon className={clsx("w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem]", "text-[#472E75]")} />}
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
          "w-full"
        )}
      >
        <span className={clsx("text-[#1D1D1D] text-[0.875rem] sm:text-[1.125rem] font-bold")}>
          {title}
        </span>
        <span className={clsx("text-[#1D1D1D] text-[0.75rem] sm:text-[1rem] font-normal")}>
          {description}
        </span>
      </div>
    </div>
  );
};
