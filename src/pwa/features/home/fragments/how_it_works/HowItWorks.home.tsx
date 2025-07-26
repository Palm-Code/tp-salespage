"use client";
import { Badge } from "@/pwa/core/components/badge";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import staticData from "@/pwa/features/home/data/static.json";
import { CheckCircleIcon } from "lucide-react";

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
        "min-h-[761px]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-2 items-center content-center justify-center justify-items-center gap-[3rem]",
          "max-w-[1200px] w-full"
        )}
      >
        {/* left */}
        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1rem]",
            "w-full"
          )}
        >
          <Badge>{t("how_it_works:label")}</Badge>
          <div
            className={clsx(
              "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1rem]",
              "w-full"
            )}
          >
            <h2
              className={clsx("text-[2.5rem] font-bold text-left")}
              style={{
                background: "linear-gradient(90deg, #3A099C 0%, #10012D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("how_it_works:title")}
            </h2>
            <span
              className={clsx("text-[#4D4D4D] text-[1.125rem] font-normal")}
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
            <span className={clsx("text-[#1D1D1D] text-[1.25rem] font-bold")}>
              {t("how_it_works:title_items")}
            </span>
            <div
              className={clsx(
                "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1.5rem]",
                "w-full"
              )}
            >
              {setupItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <>
                    <div
                      key={index}
                      className={clsx(
                        "grid grid-flow-col items-start content-start justify-start justify-items-start gap-[1rem]",
                        "w-full",
                        "px-[1rem] py-[1rem]"
                      )}
                    >
                      <Icon
                        className={clsx(
                          "w-[1.5rem] h-[1.5rem]",
                          "text-[#67A981]"
                        )}
                      />
                      <span
                        className={clsx(
                          "text-[#1D1D1D] text-[1.125rem] font-normal"
                        )}
                      >
                        {item.description}
                      </span>
                    </div>
                    {index < setupItems.length - 1 && (
                      <div className={clsx("w-full h-[1px]", "bg-[#F0ECF6]")} />
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {/* right */}
        <img src={"/images/how_it_works/image.svg"} />
      </div>
    </section>
  );
};
