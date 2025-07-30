import clsx from "clsx";
import { Star } from "lucide-react";

export interface TestimonialCardHomeProps {
  rating?: number;
  review?: string;
  reviewerName?: string;
  reviewerJob?: string;
  reviewerPhoto?: string;
}

export const TestimonialCardHome = ({
  rating = 0,
  review,
  reviewerName,
  reviewerJob,
  reviewerPhoto,
}: TestimonialCardHomeProps) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 grid-rows-1 grid-flow-row items-stretch content-start justify-start justify-items-start gap-[1rem]",
        "min-w-[270px] md:min-w-[324px] w-full min-h-[322px]",
        "px-[1rem] py-[1.5rem]",
        "border border-[#CFC4E3]",
        "rounded-[0.5rem]"
      )}
    >
      <div
        className={clsx(
          "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
          "w-full"
        )}
      >
        <div
          className={clsx(
            "grid grid-flow-col place-content-start place-items-start gap-[0.5rem]",
            "w-full"
          )}
        >
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#F8B306]")}
            />
          ))}
        </div>

        <span className={clsx("text-[#232323] text-[0.875rem] font-medium")}>
          {review}
        </span>
      </div>

      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[1rem]",
          "w-full"
        )}
      >
        <img
          src={reviewerPhoto}
          alt={reviewerName}
          className={clsx("w-[2.5rem] h-[2.5rem] md:w-[50px] md:h-[50px]", "rounded-full")}
          width={50}
          height={50}
        />
        <div
          className={clsx(
            "grid grid-cols-1 items-center content-center justify-start justify-items-start gap-[0.5rem]",
            "w-full"
          )}
        >
          <span className={clsx("text-[#1D1D1D] text-[0.875rem] md:text-[1rem] font-semibold")}>
            {reviewerName}
          </span>
          <span className={clsx("text-[#6A6A6A] text-[0.75rem] md:text-[0.875rem] font-normal")}>
            {reviewerJob}
          </span>
        </div>
      </div>
    </div>
  );
};
