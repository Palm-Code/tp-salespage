"use client";
import { Badge } from "@/pwa/core/components/badge";
import { useTranslation } from "@/pwa/core/i18n/hooks";
import clsx from "clsx";
import staticData from "@/pwa/features/home/data/static.json";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  useRef,
  useState,
} from "react";
import {
  CalendarDaysIcon,
  LayersIcon,
  LightbulbIcon,
  LucideProps,
  MessagesSquareIcon,
  ShieldCheckIcon,
  SpeechIcon,
} from "lucide-react";
import { WhatYouGetCardHome } from "../../components/what_you_get_card";
import { Volume2, VolumeOff } from "lucide-react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

export const WhatYouGetHome = () => {
  const { t } = useTranslation();
  const isMd = useMediaQuery("(min-width: 768px)");
  const { scrollYProgress } = useScroll();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const items = staticData.what_you_get.items.map((item) => {
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
        icon = CalendarDaysIcon;
        break;
      }
      case "3": {
        icon = SpeechIcon;
        break;
      }
      case "4": {
        icon = LayersIcon;
        break;
      }
      case "5": {
        icon = LightbulbIcon;
        break;
      }
      case "6": {
        icon = ShieldCheckIcon;
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
        "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[3rem]",
        "w-full",
        "min-h-[1346px] md:min-h-[1196px]"
      )}
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 236, 246, 0.8) 100%)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className={clsx(
          "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[3rem]",
          "w-full h-full",
          "px-[1.5rem] xl:px-0 py-[2rem]"
        )}
        style={{
          backgroundImage: isMd
            ? "url('/images/home/what_you_get/bg.svg')"
            : "url('/images/home/what_you_get/bg_mobile.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={clsx(
            "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[3rem]",
            "max-w-5xl w-full h-full"
          )}
        >
          <div
            className={clsx(
              "grid grid-cols-1 items-start content-start justify-center justify-items-center gap-[0.5rem] md:gap-[1rem]",
              "w-full"
            )}
          >
            <Badge>{t("what_you_get:label")}</Badge>
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
              {t(staticData.what_you_get.title)}
            </h2>
          </div>
          {/* video */}

          <video
            ref={videoRef}
            className={clsx(
              "w-full h-[312px] md:h-[528px]",
              "object-cover",
              "rounded-[1.5rem]"
            )}
            autoPlay
            loop
            playsInline
            preload="auto"
            muted={isMuted}
          >
            <source
              src={
                "https://res.cloudinary.com/drccyjwrq/video/upload/f_auto:video,q_50/v1/videos/Tiny_Parrot_Product_Demo_-_English_Portrait_ngka4y"
              }
              type="video/mp4"
              media="(max-width: 768px)"
            />
            <source
              src={"/videos/what_you_get/video.webm"}
              type="video/mp4"
              media="(min-width: 769px)"
            />
          </video>

          <motion.div
            style={{
              opacity: useTransform(
                scrollYProgress,
                [0.18, 0.25, 0.3, 0.45],
                [0, 1, 1, 0]
              ),
            }}
            className={"fixed bottom-12 right-0 z-[45] container"}
          >
            <button
              className={clsx(
                "ml-auto",
                "text-white backdrop-blur-[5px] p-[0.5rem] rounded-[0.5rem]"
              )}
              style={{
                background:
                  "linear-gradient(90deg, rgba(20, 6, 45, 0.70) 0%, rgba(74, 70, 83, 0.70) 100%)",
                boxShadow: "0px 0px 10px 0px #C9ABFF",
              }}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeOff /> : <Volume2 />}
            </button>
          </motion.div>

          {/* items */}
          <div
            className={clsx(
              "grid grid-cols-1 lg:grid-cols-3 place-content-center place-items-center gap-[3rem]",
              "w-full"
            )}
          >
            {items.map((item, index) => (
              <WhatYouGetCardHome
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
