import type { Metadata } from "next";
import { Anton, Montserrat, Mrs_Saint_Delafield } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

/* Brand fonts, matched to the "Building My Own Legacy" posters. */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const script = Mrs_Saint_Delafield({
  variable: "--font-mrs-saint-delafield",
  weight: "400",
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
    <html
      lang="en"
      className={`${montserrat.variable} ${anton.variable} ${script.variable} antialiased`}
    >
      <body>
        <a
          href="#main"
          className="button-sm fixed top-4 left-4 z-100 -translate-y-24 rounded-full bg-ink px-3 py-2 text-cream transition duration-300 ease-out-expo focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
