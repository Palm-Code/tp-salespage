import * as React from "react";
import clsx from "clsx";
import { HeroHome } from "../fragments/hero";
import { ProblemHome } from "../fragments/problem";
import { HowItWorksHome } from "../fragments/how_it_works";
import { WhatYouGetHome } from "../fragments/what_you_get";
import { TestimonialHome } from "../fragments/testimonial";
import { PricingHome } from "../fragments/pricing";
import { RiskFreeGuaranteeHome } from "../fragments/risk_free_guarantee";
import { FAQHome } from "../fragments/faq";
import { GetYourTimeBackHome } from "../fragments/get_your_time_back";
import { FooterHome } from "../fragments/footer";

export const HomeContainer = () => {
  return (
    <div className={clsx("w-full")}>
      <HeroHome />
      <ProblemHome />
      <HowItWorksHome />
      <WhatYouGetHome />
      <TestimonialHome />
      <PricingHome />
      <RiskFreeGuaranteeHome />
      <FAQHome />
      <GetYourTimeBackHome />
      <FooterHome />
    </div>
  );
};
