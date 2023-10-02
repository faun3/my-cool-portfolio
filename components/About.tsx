"use client";
import { motion } from "framer-motion";
import Bento from "./Bento";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-[8rem]">
        <p className="body-2 font-semibold text-wrap-balance">
          tldr: I make websites. I also experiment with visual art like
          photography, drawing and painting. My life goal is making my house
          look overrun by plants.
        </p>
        {/* <Bento /> */}
      </div>
    </>
  );
};
export default About;
