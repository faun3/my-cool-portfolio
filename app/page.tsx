"use client";
import TextMarquee from "@/components/TextMarquee";
import Image from "next/image";
import Mission from "@/components/Mission";
import About from "@/components/About";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import TechStack from "@/components/TechStack";
import Connect from "@/components/Connect";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <TextMarquee />
      <main className="md:w-[864px] lg:w-[1184px] w-[85%] mx-auto">
        <Mission />
        <About />
        <TechStack />
        <Connect />
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
