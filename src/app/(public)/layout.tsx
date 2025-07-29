import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { LanguageProvider } from "@/pwa/core/i18n/context/LanguageProvider";
import { ReactQueryProvider } from "@/pwa/core/lib/react-query";
import { AppContainer } from "@/pwa/core/modules/app/container";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiny Parrot - Sales Page",
  description: "Tiny Parrot - Sales Page",
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <ReactQueryProvider>
        <html lang="en">
          <body
            className={clsx(
              inter.variable,
              "antialiased",
              "grid grid-cols-1 items-start content-start justify-center justify-items-center",
              "w-full"
            )}
          >
            <AppContainer>{children}</AppContainer>
          </body>
        </html>
      </ReactQueryProvider>
    </LanguageProvider>
  );
}
