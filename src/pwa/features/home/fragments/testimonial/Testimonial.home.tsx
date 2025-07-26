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
        "min-h-[648px]"
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
            className={clsx("text-[2.5rem] font-bold text-left")}
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
            "grid place-content-center place-items-center gap-[2rem]",
            "w-full"
          )}
          style={{ gridTemplateColumns: `repeat(4,1fr)` }}
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
