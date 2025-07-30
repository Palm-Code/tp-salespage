"use client";
import clsx from "clsx";
import staticData from "@/pwa/features/home/data/static.json";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";

export const HeaderHome = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    const checkInitialScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", checkInitialScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={clsx(
        "flex flex-row items-center justify-center gap-[1.5rem]",
        "w-full",
        "min-h-[61px] md:min-h-[90px]",
        "px-[1rem] xl:px-[0px]",
        "fixed top-0 left-0 right-0 z-[999]",
        scrolled && "bg-white shadow-lg transition-all"
      )}
    >
      <div
        className={clsx(
          "flex flex-row items-center justify-between gap-[1.5rem]",
          "w-full max-w-5xl h-full"
        )}
      >
        <img
          src={staticData.header.logo.src}
          alt={"logo"}
          width={145}
          height={32}
          className={clsx("w-[114px] h-[24px] md:w-[145px] md:h-[32px]")}
        />

        <Link
          href={staticData.header.cta.href}
          target="_blank"
          className={clsx(
            "px-[1rem] py-[0.5rem] md:px-[1rem] md:py-[1rem]",
            "bg-[#2A1B45]",
            "rounded-[0.5rem]",
            "text-white text-[0.75rem] md:text-[1rem] font-semibold",
            "hover:brightness-150"
          )}
        >
          {t(staticData.header.cta.label)}
        </Link>
      </div>
    </header>
  );
};
