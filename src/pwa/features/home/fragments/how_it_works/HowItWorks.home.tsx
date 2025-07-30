"use client";
import { Badge } from "@/pwa/core/components/badge";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import staticData from "@/pwa/features/home/data/static.json";
import { CheckCircleIcon } from "lucide-react";
import { Fragment } from "react";

export const HowItWorksHome = () => {
  const { t } = useTranslation();

  const setupItems = staticData.how_it_works.items.map((item) => {
    return {
      icon: CheckCircleIcon,
      description: t(item.description),
    };
  });
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[3rem]",
        "w-full",
        "h-full",
        "px-[1.5rem] xl:px-0 py-[2rem] sm:py-[83px]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 items-center content-center justify-center justify-items-center gap-[3rem]",
          "max-w-5xl w-full"
        )}
      >
        {/* left */}
        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-center justify-items-center md:justify-start md:justify-items-start gap-[1rem]",
            "w-full"
          )}
        >
          <Badge>{t("how_it_works:label")}</Badge>
          <div
            className={clsx(
              "grid grid-cols-1 items-start content-start justify-center justify-items-center md:justify-start md:justify-items-start gap-[1rem]",
              "w-full"
            )}
          >
            <h2
              className={clsx(
                "text-[1.25rem] text-center md:text-left md:text-[2.5rem] font-bold"
              )}
              style={{
                background: "linear-gradient(90deg, #3A099C 0%, #10012D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("how_it_works:title")}
            </h2>
            <span
              className={clsx(
                "text-[#4D4D4D] text-center md:text-left text-[0.75rem] md:text-[1.125rem] font-normal"
              )}
            >
              {t("how_it_works:description")}
            </span>
          </div>

          {/* setup */}
          <div
            className={clsx(
              "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1.5rem]",
              "w-full"
            )}
          >
            <span
              className={clsx(
                "text-[#1D1D1D] text-[1.125rem] md:text-[1.25rem] font-bold"
              )}
            >
              {t("how_it_works:title_items")}
            </span>
            <div
              className={clsx(
                "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1rem] md:gap-[0.75.5rem]",
                "w-full"
              )}
            >
              {setupItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Fragment key={index}>
                    <div
                      className={clsx(
                        "grid grid-flow-col items-start content-start justify-start justify-items-start gap-[1rem]",
                        "w-full",
                        "px-[0rem] py-[0rem] md:px-[1rem] md:py-[1rem]"
                      )}
                    >
                      <Icon
                        className={clsx(
                          "w-[1rem] h-[1rem] md:w-[1.5rem] md:h-[1.5rem]",
                          "text-[#67A981]"
                        )}
                      />
                      <span
                        className={clsx(
                          "text-[#1D1D1D] text-[0.75rem] md:text-[1.125rem] font-normal"
                        )}
                      >
                        {item.description}
                      </span>
                    </div>
                    {index < setupItems.length - 1 && (
                      <div className={clsx("w-full h-[1px]", "bg-[#F0ECF6]")} />
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* right */}
        <img
          src={"/images/home/how_it_works/image.svg"}
          className={clsx("w-[294px] h-[294px] md:w-[656px] md:h-[595px]")}
        />
      </div>
    </section>
  );
};
