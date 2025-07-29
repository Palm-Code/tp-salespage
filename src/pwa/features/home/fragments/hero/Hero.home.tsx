"use client";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import * as React from "react";
import clsx from "clsx";
import { Star } from "lucide-react";
import Link from "next/link";

export const HeroHome = () => {
  const { t } = useTranslation();
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[1.5rem]",
        "w-full",
        "min-h-[529px] sm:min-h-[830px]",
        "px-[1.5rem] md:px-0 pt-[5rem]"
      )}
      style={{
        backgroundImage: "url('/images/home/hero/bg.svg')",
        backdropFilter: "blur(20px)",
        backgroundPosition: "center",
      }}
    >
      <div
        className={clsx(
          "grid grid-flow-col place-content-center place-items-center gap-[0.75rem] sm:gap-[1.5rem]",
          "px-[1rem] py-[0.5rem] sm:px-[1rem] sm:py-[0.75rem]",
          "bg-white",
          "border border-[#F0ECF6]",
          "rounded-[1.5rem]"
        )}
      >
        <div
          className={clsx(
            "grid grid-flow-col place-content-center place-items-center gap-[0.25rem] sm:gap-[0.5rem]"
          )}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={clsx("w-[0.75rem] h-[0.75rem] sm:w-[1.5rem] sm:h-[1.5rem]", "text-[#F8B306]")}
            />
          ))}
        </div>

        <span className={clsx("text-[#2A1B45] text-[0.625rem] sm:text-[1rem] font-semibold")}>
          {t("hero:review")}
        </span>
      </div>

      {/* text */}
      <div
        className={clsx(
          "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[1rem] sm:gap-[1.5rem]",
          "w-full"
        )}
      >
        <h1
          className={clsx(
            "w-full max-w-[1100px]",
            "text-[#1D1D1D] text-[2rem] sm:text-[60px] font-bold text-center"
          )}
        >
          {t("hero:title")}
        </h1>
        <p
          className={clsx(
            "w-full max-w-[1100px]",
            "text-[#4D4D4D] text-[0.75rem] sm:text-[1.125rem] font-normal text-center"
          )}
        >
          {t("hero:description")}
        </p>
      </div>

      <Link
        href={"/app/tilte"}
        target="_blank"
        className={clsx(
          "px-[2rem] py-[0.75rem] sm:px-[1rem] sm:py-[1rem]",
          "bg-[#2A1B45]",
          "rounded-[0.5rem]",
          "text-white text-[0.75rem] sm:text-[1rem] font-semibold"
        )}
      >
        {t("hero:cta")}
      </Link>
    </section>
  );
};
