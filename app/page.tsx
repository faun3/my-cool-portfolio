"use client";
import TextMarquee from "@/components/TextMarquee";
import Image from "next/image";
import Mission from "@/components/Mission";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="relative left-[calc(32px+50%)] md:left-[calc(80px+50%)] lg:left-1/2 w-[900px] h-[600px] -translate-x-1/4">
          {/* image is invalid, the idea sort of sucks */}
          {/* new idea: make a pixel spray thing that your text can loop over */}
          {/* the best color for it would probably be gray */}
          {/* position it offset so it peeks from the right side (just like this stupid image idea) */}
          <Image src={"/"} fill={true} alt="creek in a forest"></Image>
        </div>
        <TextMarquee />
      </div>

      <main className="md:w-[864px] lg:w-[1184px] w-[296px] mx-auto">
        <Mission />
        <p>Font credits</p>
        <div className="flex flex-col gap-4">
          <span className="font-honey uppercase">Honey</span>
          <span className="font-saint">Saint</span>
          <span className="font-destra">Destra</span>
          <span className="font-bebas">BEBAS NEUE</span>
        </div>
      </main>
    </>
  );
}
