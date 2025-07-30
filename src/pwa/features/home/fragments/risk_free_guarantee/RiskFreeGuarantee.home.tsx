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
        "h-full",
        "px-[1rem] xl:px-[0px] py-[83px] md:py-[2rem]",
        "bg-[url(/images/home/risk_free_guarantee/bg_mobile.svg)] md:bg-[url(/images/home/risk_free_guarantee/bg.svg)]"
      )}
      style={{
        backdropFilter: "blur(20px)",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={clsx(
          "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[2rem]",
          "max-w-5xl w-full h-full"
        )}
      >
        <ShieldHalf
          className={clsx(
            "w-[5rem] h-[5rem] md:w-[150px] md:h-[150px]",
            "text-[#472E75]"
          )}
        />

        <div
          className={clsx(
            "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[1rem]",
            "w-full"
          )}
        >
          <span
            className={clsx(
              "text-[#2A1B45] text-[1.125rem] md:text-[2.5rem] font-bold text-center"
            )}
          >
            {t("risk_free_guarantee:title")}
          </span>
          <span
            className={clsx(
              "text-[#2A1B45] text-[0.75rem] md:text-[1.125rem] font-normal text-center"
            )}
          >
            {t("risk_free_guarantee:description")}
          </span>
        </div>
      </div>
    </section>
  );
};
