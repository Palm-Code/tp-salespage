"use client";
import clsx from "clsx";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import { Badge } from "@/pwa/core/components/badge";
import staticData from "@/pwa/features/home/data/static.json";
import {
  MessagesSquareIcon,
  LucideProps,
  CalendarX2Icon,
  ZapOffIcon,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ProblemCardHome } from "../../components/problem_card";

export const ProblemHome = () => {
  const { t } = useTranslation();

  const items = staticData.problem.items.map((item) => {
    let icon:
      | ForwardRefExoticComponent<
          Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
        >
      | undefined;
    switch (item.id) {
      case "1": {
        icon = MessagesSquareIcon;
        break;
      }
      case "2": {
        icon = CalendarX2Icon;
        break;
      }
      case "3": {
        icon = ZapOffIcon;
        break;
      }
      default: {
        break;
      }
    }
    return {
      icon: icon,
      title: t(item.title),
      description: t(item.description),
    };
  });
  return (
    <section
      className={clsx(
        "grid grid-cols-1 items-center content-center justify-center justify-items-center gap-[3rem]",
        "w-full",
        "min-h-[628px] md:min-h-[458px]",
        "px-[1.5rem] xl:px-0 py-[2rem]"
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
          <Badge>{t("problem:label")}</Badge>
          <h2
            className={clsx("text-[1.25rem] md:text-[2.5rem] font-bold")}
            style={{
              background: "linear-gradient(90deg, #3A099C 0%, #10012D 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("problem:title")}
          </h2>
        </div>

        <div
          className={clsx(
            "grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center gap-[1.5rem] md:gap-[3rem]",
            "w-full"
          )}
        >
          {items.map((item, index) => (
            <ProblemCardHome
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
