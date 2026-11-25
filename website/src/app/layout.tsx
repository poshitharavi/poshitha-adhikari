import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body>
        <a
          href="#main"
          className="button-sm fixed top-4 left-4 z-100 -translate-y-24 rounded-full bg-ink px-3 py-2 text-white transition duration-300 ease-out-expo focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
