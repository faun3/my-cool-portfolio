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
      className={`sticky top-0 left-0 w-full flex justify-center origin-top ${
        folded && "scale-y-0"
      } transition-transform delay-200`}>
      <div className="w-[70%] flex justify-between items-center">
        <div>
          <Image
            src={Logo}
            width={80}
            height={70}
            alt=""
            aria-hidden="true"></Image>
        </div>
        <div className="rounded-full bg-white text-[1.125rem]">
          <ul className="flex gap-[2rem] font-semibold">
            <li>Projects</li>
            <li>Connect</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
