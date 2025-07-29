import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export interface FAQAccordionHomeProps {
  question?: string;
  answer?: string;
}

export const FAQAccordionHome = ({
  question,
  answer,
}: FAQAccordionHomeProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickAccordionButton = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        isOpen ? "gap-[0.75rem]" : "gap-[0rem]",
        "w-full",
        "px-[1rem] py-[1.5rem] sm:px-[2rem] sm:py-[2rem]",
        "rounded-[0.5rem]",
        "bg-[#F0ECF64D]"
      )}
    >
      <button
        aria-label={question}
        name={question}
        className={clsx(
          "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0rem]",
          "w-full",
          "cursor-pointer"
        )}
        onClick={handleClickAccordionButton}
      >
        <span className={clsx("text-[#37245B] text-[0.875rem] sm:text-[1.5rem] font-bold")}>
          {question}
        </span>
        {isOpen ? (
          <Minus className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#472E75]")} />
        ) : (
          <Plus className={clsx("w-[1.5rem] h-[1.5rem]", "text-[#472E75]")} />
        )}
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={clsx("text-[#1D1D1D] text-[0.75rem] sm:text-[1.25rem] font-normal")}
      >
        {answer}
      </motion.div>
    </div>
  );
};
