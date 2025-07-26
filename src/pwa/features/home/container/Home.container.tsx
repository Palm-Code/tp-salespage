import * as React from "react";
import clsx from "clsx";
import { HeroHome } from "../fragments/hero";
import { ProblemHome } from "../fragments/problem";
import { HowItWorksHome } from "../fragments/how_it_works";

export const HomeContainer = () => {
  return (
    <div className={clsx("w-full")}>
      <HeroHome />
      <ProblemHome />
      <HowItWorksHome />
    </div>
  );
};
