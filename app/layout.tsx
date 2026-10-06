import { Metadata } from "next";
import Script from "next/script";
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
    return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9BPFCTJ4WM"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-9BPFCTJ4WM');
          `}
        </Script>
      </body>
    </html>
  );
}