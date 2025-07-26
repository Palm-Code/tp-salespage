import clsx from "clsx";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface ProblemCardHomeProps {
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title?: string;
  description?: string;
}

export const ProblemCardHome = ({
  icon: Icon,
  title,
  description,
}: ProblemCardHomeProps) => {
  return (
    <div
      className={clsx(
        "grid grid-flow-col place-content-start place-items-start gap-[1rem]",
        "w-full",
        "px-[1.5rem] py-[1.5rem]",
        "border border-[#CFC4E3]",
        "rounded-[0.5rem]"
      )}
    >
      {Icon && <Icon className={clsx("w-[2rem] h-[2rem]", "text-[#472E75]")} />}
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
          "w-full"
        )}
      >
        <span className={clsx("text-[#1D1D1D] text-[1.125rem] font-bold")}>
          {title}
        </span>
        <span className={clsx("text-[#1D1D1D] text-[1rem] font-normal")}>
          {description}
        </span>
      </div>
    </div>
  );
};
