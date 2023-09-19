"use client";
import Image from "next/image";
import Logo from "@/public/icons/Logo.svg";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const { scrollY } = useScroll();
  const [folded, setFolded] = useState(false);

  function updateNavFoldState() {
    if (scrollY.get() < scrollY.getPrevious()) {
      setFolded(false);
    } else if (
      scrollY.get() > scrollY.getPrevious() &&
      scrollY.get() - scrollY.getPrevious() > 10
    ) {
      setFolded(true);
    }
  }

  useMotionValueEvent(scrollY, "change", () => {
    updateNavFoldState();
  });

  return (
    <nav
      className={`sticky top-[1rem] left-0 w-full flex justify-center origin-top ${
        folded && "scale-y-0"
      } transition-transform delay-200 z-[100]`}>
      <div className="w-[80%] flex justify-between items-center backdrop-blur-lg rounded-[10px] bg-[rgba(230,230,230,0.6)] px-[1rem]">
        <div className="rounded-[10px] flex items-center gap-[1rem]">
          <Image
            src={Logo}
            width={80}
            height={70}
            alt=""
            aria-hidden="true"></Image>
          <p className="font-bold tracking-wider text-[1.25rem]">faun3</p>
        </div>
        <div className="rounded-[10px] text-[1.125rem] px-[1rem] py-[0.5rem] text-black z-50">
          <ul className="flex gap-[2rem] font-semibold mix-blend-difference">
            <li>Projects</li>
            <li>Connect</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
