"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import bentoTest from "@/public/images/bentoTest.jpg";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[8rem]">
        <p className="body-2 font-semibold text-wrap-balance">
          tldr: I make websites. I also experiment with visual art like
          photography, drawing and painting. My life goal is making my house
          look overrun by plants.
        </p>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-[2rem]">
        <div className="row-start-1 col-start-1 row-span-1 col-span-1 rounded-[20px] overflow-hidden">
          <Image
            src={bentoTest}
            alt=""
          />
        </div>
        <div className="row-start-2 col-start-1 row-span-1 col-span-1 rounded-[20px] overflow-hidden">
          <Image
            src={bentoTest}
            alt=""
          />
        </div>
        <div className="row-start-1 col-start-2 row-span-2 col-span-2 rounded-[20px] overflow-hidden bg-slate-400"></div>
      </div>
    </>
  );
};
export default About;
