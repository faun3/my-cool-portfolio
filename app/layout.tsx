import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";

const workSans = Work_Sans({ subsets: ["latin"] });

const bebasNeue = localFont({
  src: [
    {
      path: "fonts/BebasNeue-Regular.woff2",
    },
  ],
  variable: "--font-bebas",
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
    <html lang="en" className={`${workSans.className} ${bebasNeue.variable} `}>
      <body>
        <div className="bg-[#dfdfdf]">{children}</div>
      </body>
    </html>
  );
}
