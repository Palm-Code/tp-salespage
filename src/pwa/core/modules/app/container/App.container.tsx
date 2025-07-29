"use client";
import * as React from "react";
import clsx from "clsx";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import addCookieConsentListeners from "@/pwa/core/lib/cookieConsentListeners";
import getConfig from "@/pwa/core/lib/cookieConsentConfig";

export interface AppContainerProps {
  children?: React.ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  const locale = "en";
  React.useEffect(() => {
    addCookieConsentListeners();
    CookieConsent.run(getConfig({ lang: locale }));
  }, [locale]);
  return (
    <main
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start",
        "w-full"
      )}
    >
      {children}
    </main>
  );
};
