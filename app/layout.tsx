import "./globals.css";

export const metadata = {
  title: "Ullas Sreenivasan | Senior Front-End / UI Developer",
  description: "Professional portfolio of Ullas Sreenivasan, Senior Front-End / UI Developer."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}