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
  const [cursorState, setCursorState] = useState("default");

  const cursorVariants = {
    default: {
      width: 24,
      height: 24,
      opacity: 0.4,
      x: mousePos.x - 12,
      y: mousePos.y - 12,
    },
    hover: {
      width: 72,
      height: 72,
      opacity: 0.9,
      x: mousePos.x - 36,
      y: mousePos.y - 36,
    },
  };

  return (
    <div className="cursor-none">
      <motion.div
        className="bg-black fixed top-0 left-0 h-[24px] w-[24px] rounded-full z-50 pointer-events-none flex justify-center items-center"
        animate={cursorState}
        variants={cursorVariants}
        transition={{ ease: "easeOut", duration: 0.2 }}>
        {cursorState === "hover" && (
          <svg
            width="48"
            height="23"
            viewBox="0 0 64 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32 34.5209C45.1674 34.5209 56.5927 26.093 62.2811 21.0155C64.573 18.9697 64.573 15.5512 62.2811 13.5054C56.5927 8.42794 45.1674 0 32 0C18.8327 0 7.40738 8.42794 1.71893 13.5054C-0.57298 15.5512 -0.572977 18.9697 1.71894 21.0155C7.40738 26.093 18.8327 34.5209 32 34.5209ZM32 29.3026C38.6508 29.3026 44.0423 23.9112 44.0423 17.2604C44.0423 10.6097 38.6508 5.21825 32 5.21825C25.3493 5.21825 19.9579 10.6097 19.9579 17.2604C19.9579 23.9112 25.3493 29.3026 32 29.3026Z"
              fill="#E2D5D5"
            />
          </svg>
        )}
      </motion.div>
      <TextMarquee />
      <main className="md:w-[864px] lg:w-[1184px] w-[85%] mx-auto">
        <Mission />
        <About />
        {/* this section kinda sucks. I might bin it */}
        {/* <TechStack /> */}
        {/* <Connect /> */}
        <div className="mb-[8rem] bg-[#aba0a0] rounded-[20px] w-fit p-[4rem] px-[6rem] mx-auto">
          <div
            className="rounded-full aspect-square w-[100%] flex justify-center items-center bg-[#eee8e8] mx-auto mb-[4rem]"
            onMouseEnter={() => {
              setCursorState("hover");
            }}
            onMouseLeave={() => {
              setCursorState("default");
            }}>
            <Link
              href={"#"}
              className="body-2 cursor-none">
              say hi :&#41;
            </Link>
          </div>
          <p className="mb-[1rem] text-[1.125rem]">myemailhere@gmail.com</p>
          <div className="flex flex-row gap-[1rem] justify-center">
            <Link
              href={"#"}
              className="cursor-none"
              onMouseEnter={() => {
                setCursorState("hover");
              }}
              onMouseLeave={() => {
                setCursorState("default");
              }}>
              <Image
                src={githubIcon}
                width={48}
                height={48}
                alt="github link"></Image>
            </Link>
            <Link
              href={"#"}
              onMouseEnter={() => {
                setCursorState("hover");
              }}
              onMouseLeave={() => {
                setCursorState("default");
              }}
              className="cursor-none">
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
          <span className="font-honey uppercase">Honey</span>
          <span className="font-saint">Saint</span>
          <span className="font-destra">Destra</span>
          <span className="font-bebas">BEBAS NEUE</span>
        </div>
      </main>
    </div>
  );
}
