"use client";
import clsx from "clsx";
import staticData from "@/pwa/features/home/data/static.json";
import Link from "next/link";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import { useMediaQuery } from "usehooks-ts";

export const FooterHome = () => {
  const { t } = useTranslation();
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <footer
      className={clsx(
        "flex flex-col md:flex-row items-center justify-center gap-[1.5rem]",
        "w-full",
        "h-full md:min-h-[100px]",
        "px-[1rem] xl:px-[0px] pt-[1.5rem] pb-[5rem] md:pt-[0px] md:pb-[0px]",
        "border-t border-t-[#D8D8D8] md:border-t-0"
      )}
    >
      <div
        className={clsx(
          "flex flex-col md:flex-row items-center justify-center md:justify-between gap-[1.5rem]",
          "w-full max-w-5xl"
        )}
      >
        <img
          src={
            isMd
              ? "/images/home/footer/logo.svg"
              : "/images/home/footer/logo_mobile.svg"
          }
          alt={"logo"}
          width={165}
          height={72}
        />

        <Link
          href={staticData.footer.cta.href}
          target="_blank"
          className={clsx(
            "px-[2rem] py-[0.75rem] md:px-[1rem] md:py-[1rem]",
            "bg-[#2A1B45]",
            "rounded-[0.5rem]",
            "text-white text-[0.75rem] md:text-[1rem] font-semibold",
            "hover:brightness-150",
            "block md:hidden"
          )}
        >
          {t("footer:cta")}
        </Link>

        <div
          className={clsx(
            "flex flex-col md:flex-row items-center justify-center gap-[1rem] md:gap-[3rem]"
          )}
        >
          {staticData.footer.menu.items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className={clsx(
                "text-[#303030] text-[0.75rem] md:text-[1rem] font-normal md:font-medium"
              )}
            >
              {t(item.name)}
            </Link>
          ))}
        </div>

        <Link
          href={staticData.footer.cta.href}
          target="_blank"
          className={clsx(
            "px-[2rem] py-[0.75rem] md:px-[1rem] md:py-[1rem]",
            "bg-[#2A1B45]",
            "rounded-[0.5rem]",
            "text-white text-[0.75rem] md:text-[1rem] font-semibold",
            "hover:brightness-150",
            "hidden md:block"
          )}
        >
          {t("footer:cta")}
        </Link>
      </div>
    </footer>
  );
};
