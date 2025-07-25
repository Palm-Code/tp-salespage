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
        "min-h-[830px]"
      )}
      style={{
        backgroundImage: "url('/images/home/hero/bg.svg')",
        backdropFilter: "blur(20px)",
      }}
    >
      <div
        className={clsx(
          "grid grid-flow-col place-content-center place-items-center gap-[1.5rem]",
          "px-[1rem] py-[0.75rem]",
          "bg-white",
          "border border-[#F0ECF6]",
          "rounded-[1.5rem]"
        )}
      >
        <div
          className={clsx(
            "grid grid-flow-col place-content-center place-items-center gap-[0.5rem]"
          )}
        >
          {Array.from({ length: 5 }).map(() => (
            <Star className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#F8B306]")} />
          ))}
        </div>

        <span className={clsx("text-[#2A1B45] text-[1rem] font-semibold")}>
          {t("hero:review")}
        </span>
      </div>

      {/* text */}
      <div
        className={clsx(
          "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[1.5rem]",
          "w-full"
        )}
      >
        <h1
          className={clsx(
            "w-full max-w-[1100px]",
            "text-[#1D1D1D] text-[60px] font-bold text-center"
          )}
        >
          {t("hero:title")}
        </h1>
        <p
          className={clsx(
            "w-full max-w-[1100px]",
            "text-[#4D4D4D] text-[1.125rem] font-normal text-center"
          )}
        >
          {t("hero:description")}
        </p>
      </div>

      <Link
        href={"/app/tilte"}
        target="_blank"
        className={clsx(
          "px-[1rem] py-[1rem]",
          "bg-[#2A1B45]",
          "rounded-[0.5rem]",
          "text-white text-[1rem] font-semibold"
        )}
      >
        {t("hero:cta")}
      </Link>
    </section>
  );
};
