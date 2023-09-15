"use client";
import TextMarquee from "@/components/TextMarquee";
import Image from "next/image";
import Mission from "@/components/Mission";
import About from "@/components/About";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import TechStack from "@/components/TechStack";
import Connect from "@/components/Connect";
import useMousePosition from "@/utils/useMousePosition";
import { motion } from "framer-motion";

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

  const mousePos = useMousePosition();

  return (
    <div className="cursor-none">
      <motion.div
        className="rounded-full w-[1.25rem] h-[1.25rem] bg-black/40 fixed"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{ type: "tween", ease: "backOut" }}></motion.div>
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
    </div>
  );
}
