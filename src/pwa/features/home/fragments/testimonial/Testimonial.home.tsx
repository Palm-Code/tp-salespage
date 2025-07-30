"use client";
import { Badge } from "@/pwa/core/components/badge";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import { TestimonialCardHome } from "../../components/testimonial_card";
import staticData from "@/pwa/features/home/data/static.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export const TestimonialHome = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const items = staticData.testimonial.items;
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Scroll 320px ke kiri (sesuaikan dengan lebar card + gap)
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Scroll 320px ke kanan
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[3rem]",
        "w-full",
        "min-h-[482px] md:min-h-[648px]",
        "px-[1.5rem] testimonial:px-0 py-[2rem]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[3rem]",
          "max-w-testimonial w-full"
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
              "text-[1.25rem] md:text-[2.5rem] text-center md:text-left font-bold"
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
        <div className="relative max-w-testimonial w-full">
          <button
            className={clsx(
              "absolute top-[50%] translate-y-[-50%] left-[-1.25rem] z-[10]",
              "hidden md:flex items-center justify-center",
              "w-[2.5rem] h-[2.5rem]",
              "rounded-full",
              "bg-[white]",
              "border border-[#CFC4E3]",
              "cursor-pointer"
            )}
            onClick={scrollLeft}
          >
            <ChevronLeft
              className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#472E75]")}
            />
          </button>
          <button
            className={clsx(
              "absolute top-[50%] translate-y-[-50%] right-[-1.25rem] z-[10]",
              "hidden md:flex items-center justify-center",
              "w-[2.5rem] h-[2.5rem]",
              "rounded-full",
              "bg-[white]",
              "border border-[#CFC4E3]",
              "cursor-pointer"
            )}
            onClick={scrollRight}
          >
            <ChevronRight
              className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#472E75]")}
            />
          </button>
          <div
            ref={scrollContainerRef}
            className={clsx(
              "grid grid-flow-col place-content-start place-items-start gap-[2rem]",
              "w-full",
              "overflow-auto",
              "scroll-smooth", // CSS smooth scroll fallback
              "scrollbar-hide" // Hide scrollbar (optional)
            )}
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
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
      </div>
    </section>
  );
};
