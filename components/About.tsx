"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mb-[8rem] flex flex-col-reverse md:flex-row justify-center items-center gap-[8rem]">
      <div>
        <p className="body-2 font-semibold text-wrap-balance">
          tldr: I make websites. I also experiment with visual art like
          photography, drawing and painting. My life goal is making my house
          look overrun by plants.
        </p>
      </div>
    </div>
  );
};
export default About;
