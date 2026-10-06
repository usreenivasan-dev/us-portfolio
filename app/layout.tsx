import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ullas Sreenivasan | UI-Focused Full Stack Developer",
  description:
    "Portfolio of Ullas Sreenivasan — UI-focused Full Stack Developer and Technical Lead.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}