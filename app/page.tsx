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
import { useState } from "react";
import Link from "next/link";
import githubIcon from "@/public/icons/githubIcon.svg";
import linkedInIcon from "@/public/icons/linkedInIcon.svg";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

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
  const [isHovering, setIsHovering] = useState(false);

  const cursorVariants = {
    default: {
      width: 24,
      height: 24,
      opacity: 0.4,
    },
    hover: {
      width: 72,
      height: 72,
      opacity: 0.8,
    },
  };

  const hoverEnter = () => {
    setIsHovering(true);
    console.log("hovering");
  };

  const hoverLeave = () => {
    setIsHovering(false);
    console.log("not hovering");
  };

  return (
    <div className="">
      <AnimatedCursor
        outerAlpha={0.45}
        trailingSpeed={1}
        innerSize={0}
        outerSize={24}
        outerScale={3}
        outerStyle={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
        clickables={[
          {
            target: ".arrow-target",
            options: {
              color: "255, 255, 255",
              outerSize: 30,
            },
          },
        ]}
      />
      {/* <motion.div
        className="rounded-full aspect-square w-[24px] bg-black/40 fixed -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isHovering ? 3 : 1,
        }}
        transition={{ type: "tween", ease: "backOut" }}>
        {isHovering ? <p>aight</p> : ""}
      </motion.div> */}
      <TextMarquee />
      <main className="md:w-[864px] lg:w-[1184px] w-[85%] mx-auto">
        <Mission />
        <About />
        <TechStack />
        {/* <Connect /> */}
        <div className="mb-[8rem] bg-[#aba0a0] rounded-[20px] w-fit p-[4rem] px-[6rem] mx-auto">
          <div
            className="rounded-full aspect-square w-[100%] flex justify-center items-center bg-[#eee8e8] mx-auto mb-[4rem] arrow-target"
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverLeave}>
            <Link
              href={"#"}
              className="body-2">
              say hi :&#41;
            </Link>
          </div>
          <p className="mb-[1rem] text-[1.125rem]">myemailhere@gmail.com</p>
          <div
            className="flex flex-row gap-[1rem] justify-center"
            onMouseEnter={hoverEnter}
            onMouseLeave={hoverLeave}>
            <Link href={"#"}>
              <Image
                src={githubIcon}
                width={48}
                height={48}
                alt="github link"></Image>
            </Link>
            <Link href={"#"}>
              <Image
                src={linkedInIcon}
                width={48}
                height={48}
                alt="linked in link"></Image>
            </Link>
          </div>
        </div>
        <p>Font credits</p>
        <div className="flex flex-col gap-4">
          <span
            className="font-honey uppercase"
            onMouseEnter={() => {}}
            onMouseLeave={() => {
              setIsHovering(false);
            }}>
            Honey
          </span>
          <span className="font-saint">Saint</span>
          <span className="font-destra">Destra</span>
          <span className="font-bebas">BEBAS NEUE</span>
        </div>
      </main>
    </div>
  );
}
