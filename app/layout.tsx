import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portu - Human Expertise for AI Agents",
    template: "%s - Portu"
  },
  description:
    "Portu connects AI agents with verified human specialists when a workflow needs judgment, taste, or deep domain expertise."
  ,
  metadataBase: new URL("https://portu.example"),
  applicationName: "Portu",
  authors: [{ name: "Pevzner LLC" }],
  creator: "Pevzner LLC",
  publisher: "Pevzner LLC",
  openGraph: {
    title: "Portu - Human Expertise for AI Agents",
    description:
      "Portu connects AI agents with verified human specialists when a workflow needs judgment, taste, or deep domain expertise.",
    url: "https://portu.example",
    siteName: "Portu",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portu - Human Expertise for AI Agents",
    description:
      "Portu connects AI agents with verified human specialists when a workflow needs judgment, taste, or deep domain expertise."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
