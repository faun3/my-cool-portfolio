import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import Nav from "@/components/Nav";

const workSans = Work_Sans({ subsets: ["latin"] });

const saint = localFont({
  src: [
    {
      path: "fonts/SaintRegular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-saint",
  display: "block",
});

const bebasNeue = localFont({
  src: [
    {
      path: "fonts/BebasNeue-Regular.woff2",
    },
  ],
  variable: "--font-bebas",
  display: "block",
});

const destra = localFont({
  src: [
    {
      path: "fonts/GPDestra-Light.otf",
      weight: "400",
    },
  ],
  variable: "--font-destra",
  display: "block",
});

const honey = localFont({
  src: [
    {
      path: "fonts/HoneyDemo-Light.otf",
      weight: "400",
    },
  ],
  variable: "--font-honey",
  display: "block",
});

export const metadata: Metadata = {
  title: "faun3 ",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${workSans.className} ${honey.variable} ${destra.variable} ${bebasNeue.variable} `}>
      <body>
        <div className="bg-[#dfdfdf]">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
