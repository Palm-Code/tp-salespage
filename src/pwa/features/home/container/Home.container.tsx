import * as React from "react";
import clsx from "clsx";
import { HeroHome } from "../fragments/hero";

export const HomeContainer = () => {
  return (
    <div className={clsx("w-full")}>
      <HeroHome />
    </div>
  );
};
