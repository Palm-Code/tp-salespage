"use client";
import { Badge } from "@/pwa/core/components/badge";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import {
  CheckCircleIcon,
  LockIcon,
  LucideProps,
  TimerIcon,
  ZapIcon,
} from "lucide-react";
import staticData from "@/pwa/features/home/data/static.json";
import { ForwardRefExoticComponent, Fragment, RefAttributes } from "react";
import Link from "next/link";

export const PricingHome = () => {
  const { t } = useTranslation();
  const setupItems = staticData.plan_pricing.items.map((item) => {
    return {
      icon: CheckCircleIcon,
      description: t(item.description),
    };
  });
  const footerItems = staticData.plan_pricing.footer.map((item) => {
    let icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    > = LockIcon;
    switch (item.id) {
      case "1": {
        icon = LockIcon;
        break;
      }
      case "2": {
        icon = ZapIcon;
        break;
      }
      case "3": {
        icon = TimerIcon;
        break;
      }
      default: {
        break;
      }
    }
    return {
      icon: icon,
      description: t(item.description),
    };
  });
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[1.5rem]",
        "w-full",
        "h-full",
        "px-[1.5rem] xl:px-0 py-[83px] md:py-[2rem]"
      )}
      style={{
        backgroundImage: "url('/images/home/pricing/bg.svg')",
        backdropFilter: "blur(20px)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={clsx(
          "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[3rem]",
          "max-w-5xl w-full"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[1rem]",
            "w-full"
          )}
        >
          <Badge>{t("plan_pricing:label")}</Badge>
          <h2
            className={clsx("text-[1.25rem] md:text-[2.5rem] font-bold")}
            style={{
              background: "linear-gradient(90deg, #3A099C 0%, #10012D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("plan_pricing:title")}
          </h2>
          <span
            className={clsx(
              "text-[#4D4D4D] text-center md:text-left text-[0.75rem] md:text-[1rem] font-normal"
            )}
          >
            {t("plan_pricing:description").replaceAll("'", ",")}
          </span>
        </div>

        {/* pricing */}
        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1rem]",
            "w-full max-w-[990px]",
            "border border-[#CFC4E3]",
            "rounded-[1rem]",
            "px-[1rem] py-[1.5rem] md:px-[60px] md:py-[2rem]"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 md:grid-cols-[486px_1fr] items-center content-center justify-start justify-items-start gap-[1rem]",
              "w-full"
            )}
          >
            {/* left */}
            <div
              className={clsx(
                "grid grid-cols-1 items-start content-start justify-center justify-items-center md:justify-start md:justify-items-start gap-[1.5rem] md:gap-[3rem]",
                "w-full"
              )}
            >
              <div
                className={clsx(
                  "grid grid-cols-1 items-start content-start justify-center justify-items-center md:justify-start md:justify-items-start gap-[0.5rem]",
                  "w-full"
                )}
              >
                {/* limited offer */}
                <div
                  className={clsx(
                    "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]",
                    "w-fit",
                    "border border-[#CFC4E3]",
                    "rounded-[1.5rem]",
                    "bg-[#FF0066]",
                    "px-[1rem] py-[0.5rem] md:px-[1rem] md:py-[0.75rem]"
                  )}
                >
                  <ZapIcon
                    className={clsx("w-[1.5rem] h-[1.5rem]", "text-[white]")}
                  />
                  <span
                    className={clsx(
                      "text-[0.625rem] md:text-[0.875rem] text-[white] font-semibold uppercase"
                    )}
                  >
                    {t("plan_pricing:limited_time")}
                  </span>
                </div>

                {/* title */}
                <span
                  className={clsx(
                    "text-[#1D1D1D] text-[1.125rem] md:text-[2rem] font-bold"
                  )}
                >
                  {t("plan_pricing:offer_title")}
                </span>

                {/* description */}
                <span
                  className={clsx(
                    "text-[#6441A5] text-[0.75rem] md:text-[0.875rem] font-medium"
                  )}
                >
                  {t("plan_pricing:offer_description")}
                </span>
              </div>

              <div
                className={clsx(
                  "grid grid-flow-col items-center content-center justify-center justify-items-center md:justify-start md:justify-items-start gap-[1.5rem]",
                  "w-full"
                )}
              >
                <span
                  className={clsx(
                    "text-[#4D4D4D] text-[1.125rem] md:text-[2rem] font-medium line-through"
                  )}
                >
                  {t("plan_pricing:original_price")}
                </span>
                <div
                  className={clsx(
                    "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.5rem]",
                    "w-full"
                  )}
                >
                  <span
                    className={clsx(
                      "text-[#1D1D1D] text-[2.5rem] md:text-[5rem] font-bold"
                    )}
                  >
                    {t("plan_pricing:discount_price")}
                  </span>
                  <span
                    className={clsx(
                      "text-[#6A6A6A] text-[1rem] md:text-[1.125rem] font-medium"
                    )}
                  >
                    {t("plan_pricing:per_month")}
                  </span>
                </div>
              </div>
            </div>

            {/* right */}
            <div
              className={clsx(
                "grid grid-cols-2 md:grid-cols-1 items-center content-cente justify-center justify-items-center md:justify-start md:justify-items-start gap-[1rem] md:gap-[2rem]",
                "w-full",
                "px-[22px] md:px-[0rem]"
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
                        "px-[0rem] py-[0rem]"
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
                          "text-[#1D1D1D] text-[0.625rem] md:text-[1.125rem] font-normal"
                        )}
                      >
                        {item.description}
                      </span>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
          {/* bottom */}
          <div
            className={clsx(
              "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[1rem]",
              "w-full"
            )}
          >
            <Link
              href={"https://app.tiny-parrot.com/signin"}
              target="_blank"
              className={clsx(
                "px-[1rem] py-[1rem]",
                "w-full",
                "text-center",
                "bg-[#2A1B45]",
                "rounded-[0.5rem]",
                "text-white text-[0.75rem] md:text-[1rem] font-semibold",
                "hover:brightness-150"
              )}
            >
              {t("plan_pricing:cta")}
            </Link>

            <div
              className={clsx(
                "flex flex-wrap items-center justify-center gap-[1.5rem] md:gap-[3rem]",
                "w-full max-w-[300px] md:max-w-full"
              )}
            >
              {footerItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={clsx(
                      "grid grid-flow-col items-center content-center justify-center justify-items-center gap-[0.5rem]"
                    )}
                  >
                    <Icon
                      className={clsx(
                        "w-[1rem] h-[1rem] md:w-[1.5rem] md:h-[1.5rem]",
                        "text-[#472E75]"
                      )}
                    />
                    <span
                      className={clsx(
                        "text-[#1D1D1D] text-[0.625rem] md:text-[0.875rem] font-medium"
                      )}
                    >
                      {item.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
