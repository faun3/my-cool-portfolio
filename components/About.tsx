"use client";
import Image from "next/image";
import aboutImage from "@/public/images/aboutImage.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mb-[8rem] flex flex-col-reverse md:flex-row justify-center items-center gap-[8rem]">
      <div>
        <p className="heading-2">about</p>
        <p className="body-2">
          tldr: I make websites. I also experiment with visual art like
          photography, drawing and painting. My life goal is making my house
          look overrun by plants.
        </p>
      </div>
      <motion.div
        className="w-full rounded-[20px] overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Image
          className="object-cover"
          src={aboutImage}
          alt="room with plants"
        ></Image>
      </motion.div>
    </div>
  );
};
export default About;
