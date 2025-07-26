"use client";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import { ShieldHalf } from "lucide-react";

export const RiskFreeGuaranteeHome = () => {
  const { t } = useTranslation();
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[1.5rem]",
        "w-full",
        "min-h-[440px]"
      )}
      style={{
        backgroundImage: "url('/images/home/risk_free_guarantee/bg.svg')",
        backdropFilter: "blur(20px)",
        backgroundPosition: "center",
      }}
    >
      <div
        className={clsx(
          "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[2rem]",
          "max-w-[1200px] w-full"
        )}
      >
        <ShieldHalf className={clsx("w-[150px] h-[150px]", "text-[#472E75]")} />
        <div
          className={clsx(
            "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[1rem]",
            "w-full"
          )}
        >
          <span className={clsx("text-[#2A1B45] text-[2.5rem] font-bold")}>
            {t("risk_free_guarantee:title")}
          </span>
          <span className={clsx("text-[#2A1B45] text-[1.125rem] font-normal")}>
            {t("risk_free_guarantee:description")}
          </span>
        </div>
      </div>
    </section>
  );
};
