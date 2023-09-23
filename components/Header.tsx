import { useState } from "react";
import Image from "next/image";
import closedEye from "@/public/images/closedEye.png";
import openEye from "@/public/images/openEye.png";
import casino from "@/public/images/headerCasino.jpg";

const Header = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(true);
  return (
    <header className="mb-[3rem] pt-[3rem]" id="home">
      <div className="font-bebas text-[8rem] md:text-[10rem]">
        <div
          className="flex items-center gap-[2rem]"
          onMouseEnter={() => {
            setIsEyeOpen((isEyeOpen) => !isEyeOpen);
          }}
          onMouseLeave={() => {
            setIsEyeOpen((isEyeOpen) => !isEyeOpen);
          }}
        >
          <span>artist</span>
          <div className="h-[1em] w-[1em] relative">
            {isEyeOpen && (
              <Image
                src={openEye}
                alt=""
                aria-hidden="true"
                className="object-fit absolute left-0 top-0"
                fill
              />
            )}
            {!isEyeOpen && (
              <Image
                src={closedEye}
                alt=""
                aria-hidden="true"
                className="absolute left-0 top-0"
              />
            )}
          </div>
        </div>
        <div>
          <span>from eastern</span>
          <div className="flex gap-[2rem] flex-col md:flex-row">
            <div className="h-[1.5em] w-[1.5em] relative">
              <Image
                src={casino}
                alt=""
                aria-hidden="true"
                className="object-fit absolute left-0 top-0"
                fill
              />
            </div>
            <div>europe</div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
