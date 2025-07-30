"use client";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import { Users } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

export const GetYourTimeBackHome = () => {
  const { t } = useTranslation();
  const isMd = useMediaQuery("(min-width: 768px)");
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[3rem]",
        "w-full",
        "min-h-[614px]",
        "px-[1rem] xl:px-[0px]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-center place-items-center gap-[1.5rem]",
          "w-full max-w-5xl h-[448px]",
          "rounded-[1rem]"
        )}
        style={{
          backgroundImage: isMd
            ? "url('/images/home/get_your_time_back/bg.svg')"
            : "url('/images/home/get_your_time_back/bg_mobile.svg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
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
            <Users
              className={clsx(
                "w-[1rem] h-[1rem] md:w-[1.5rem] md:h-[1.5rem]",
                "text-[#472E75]"
              )}
            />
          </div>

          <span
            className={clsx(
              "text-[#2A1B45] text-[0.625rem] md:text-[1rem] font-semibold"
            )}
          >
            {t("get_your_time_back:label")}
          </span>
        </div>

        <h2
          className={clsx(
            "text-[white] text-[2rem] md:text-[60px] font-bold text-center"
          )}
        >
          {t("get_your_time_back:title")}
        </h2>
        <span
          className={clsx(
            "text-[white] text-[0.75rem] md:text-[1.125rem] font-normal text-center"
          )}
        >
          {t("get_your_time_back:description")}
        </span>

        <Link
          href={"https://app.tiny-parrot.com/signin"}
          target="_blank"
          className={clsx(
            "px-[2rem] py-[0.75rem] md:px-[1rem] md:py-[1rem]",
            "bg-[#2A1B45]",
            "rounded-[0.5rem]",
            "text-white text-[0.75rem] md:text-[1rem] font-semibold",
            "hover:brightness-150"
          )}
        >
          {t("get_your_time_back:cta")}
        </Link>
      </div>
    </section>
  );
};
