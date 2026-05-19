import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `Helping Businesses Reduce Commercial Energy Costs Across the Northeast | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `Helping Businesses Reduce Commercial Energy Costs Across the Northeast | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website"
  },
  twitter: {
    card: "summary",
    title: `Helping Businesses Reduce Commercial Energy Costs Across the Northeast | ${SITE_NAME}`,
    description: SITE_DESCRIPTION
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[var(--color-bg)] font-sans text-[var(--color-text)] antialiased">
        {children}
      </body>
    </html>
  );
}
