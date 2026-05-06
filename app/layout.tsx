import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Porto - Human Expertise for AI Agents",
    template: "%s - Porto"
  },
  description:
    "Porto connects AI agents with verified human specialists when a workflow needs judgment, taste, or deep domain expertise."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
