import * as React from "react";
import clsx from "clsx";
import { HeroHome } from "../fragments/hero";
import { ProblemHome } from "../fragments/problem";
import { HowItWorksHome } from "../fragments/how_it_works";
import { WhatYouGetHome } from "../fragments/what_you_get";

export const HomeContainer = () => {
  return (
    <div className={clsx("w-full")}>
      <HeroHome />
      <ProblemHome />
      <HowItWorksHome />
      <WhatYouGetHome />
    </div>
  );
};
