"use client";
import { Badge } from "@/pwa/core/components/badge";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import staticData from "@/pwa/features/home/data/static.json";
import { FAQAccordionHome } from "../../components/faq_accordion";

export const FAQHome = () => {
  const { t } = useTranslation();
  const items = staticData.faq.items.map((item) => {
    return {
      title: t(item.title),
      description: t(item.description),
    };
  });
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[1.5rem]",
        "w-full",
        "h-full md:min-h-[1028px]",
        "px-[1rem] xl:px-[0px]"
      )}
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
          <Badge>{t("faq:label")}</Badge>
          <h2
            className={clsx(
              "text-[1.25rem] md:text-[2.5rem] text-center font-bold"
            )}
            style={{
              background: "linear-gradient(90deg, #3A099C 0%, #10012D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("faq:title")}
          </h2>
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[2rem]",
            "w-full"
          )}
        >
          {items.map((item, index) => {
            return (
              <FAQAccordionHome
                key={index}
                question={item.title}
                answer={item.description.replaceAll("'", ",")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
