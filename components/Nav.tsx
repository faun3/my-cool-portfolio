"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/icons/Logo.svg";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

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

  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-[1rem] left-0 w-full flex flex-col items-center origin-top ${
        folded && "scale-y-0"
      } transition-transform delay-200 z-[100]`}
    >
      <div className="backdrop-blur-lg bg-[rgba(230,230,230,0.6)] rounded-[10px] flex flex-col items-center w-[80%]">
        <div
          className={`w-[100%] flex justify-between items-center  rounded-t-[10px]  px-[1rem] ${
            isOpen ? "" : "rounded-b-[10px]"
          }`}
        >
          <div className="rounded-[10px] flex items-center gap-[1rem]">
            <Image
              src={Logo}
              width={80}
              height={70}
              alt=""
              aria-hidden="true"
            ></Image>
            <a
              className="font-bold tracking-wider text-[1.25rem] cursor-pointer"
              onClick={() => {
                lenis.scrollTo("#home");
              }}
            >
              faun3
            </a>
          </div>
          <div
            className="rounded-[10px] text-[1.125rem] px-[1rem] py-[0.5rem] text-black z-50 cursor-pointer"
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
            }}
          >
            <svg
              width="50"
              height="15"
              viewBox="0 0 42 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${isOpen && "rotate-90"} transition-transform`}
            >
              <path
                d="M40 4H25"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 4H2"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 4C18 4.79565 18.3161 5.55871 18.8787 6.12132C19.4413 6.68393 20.2044 7 21 7C21.7956 7 22.5587 6.68393 23.1213 6.12132C23.6839 5.55871 24 4.79565 24 4C24 3.20435 23.6839 2.44129 23.1213 1.87868C22.5587 1.31607 21.7956 1 21 1C20.2044 1 19.4413 1.31607 18.8787 1.87868C18.3161 2.44129 18 3.20435 18 4Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {isOpen && (
          <div className={`w-full  rounded-b-[10px] px-[2rem] py-[1rem]`}>
            <ul className="flex flex-col gap-[2rem] font-semibold items-end text-[1.25rem]">
              <li>
                <a
                  onClick={() => {
                    lenis.scrollTo("#projects");
                    setIsOpen((isOpen) => !isOpen);
                  }}
                  className="cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    lenis.scrollTo("#connect");
                    setIsOpen((isOpen) => !isOpen);
                  }}
                  className="cursor-pointer"
                >
                  Connect
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Nav;
