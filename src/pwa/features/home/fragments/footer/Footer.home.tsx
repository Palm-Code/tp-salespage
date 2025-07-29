'use client'
import clsx from "clsx";
import staticData from "@/pwa/features/home/data/static.json";
import Link from "next/link";
import { useTranslation } from "@/pwa/core/i18n/hooks";

export const FooterHome = () => {
  const { t } = useTranslation();
  return (
    <footer
      className={clsx(
        "flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-[1.5rem]",
        "w-full",
        "min-h-[320px] sm:min-h-[100px]",
        "px-[1rem] sm:px-[0px]"
      )}
    >
      <img
        src={staticData.footer.logo.src}
        alt={"logo"}
        width={165}
        height={72}
      />
      <div className={clsx("flex flex-col sm:flex-row items-center justify-center gap-[1rem] sm:gap-[3rem]")}>
        {staticData.footer.menu.items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            target="_blank"
            className={clsx("text-[#303030] text-[0.75rem] sm:text-[1rem] font-normal sm:font-medium")}
          >
            {t(item.name)}
          </Link>
        ))}
      </div>

      <Link
        href={staticData.footer.cta.href}
        target="_blank"
        className={clsx(
          "px-[2rem] py-[0.75rem] sm:px-[1rem] sm:py-[1rem]",
          "bg-[#2A1B45]",
          "rounded-[0.5rem]",
          "text-white text-[0.75rem] sm:text-[1rem] font-semibold"
        )}
      >
        {t("footer:cta")}
      </Link>
    </footer>
  );
};
