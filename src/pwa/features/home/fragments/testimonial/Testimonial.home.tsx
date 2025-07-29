"use client";
import { Badge } from "@/pwa/core/components/badge";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import { TestimonialCardHome } from "../../components/testimonial_card";
import staticData from "@/pwa/features/home/data/static.json";

export const TestimonialHome = () => {
  const { t } = useTranslation();
  const items = staticData.testimonial.items;
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[3rem]",
        "w-full",
        "min-h-[482px] sm:min-h-[648px]",
        "px-[1.5rem] md:px-0 py-[2rem]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[3rem]",
          "max-w-[1392px] w-full"
        )}
      >
        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[1rem]",
            "w-full"
          )}
        >
          <Badge>{t("testimonial:label")}</Badge>
          <h2
            className={clsx(
              "text-[1.25rem] sm:text-[2.5rem] text-center sm:text-left font-bold"
            )}
            style={{
              background: "linear-gradient(90deg, #3A099C 0%, #10012D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("testimonial:title")}
          </h2>
        </div>

        {/* items */}
        <div
          className={clsx(
            "grid grid-flow-col place-content-start place-items-start gap-[2rem]",
            "w-full",
            "overflow-auto"
          )}
        >
          {items.map((item, index) => (
            <TestimonialCardHome
              key={index}
              rating={item.rating}
              review={item.review}
              reviewerPhoto={item.reviewer_photo}
              reviewerName={item.reviewer_name}
              reviewerJob={item.reviewer_job}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
