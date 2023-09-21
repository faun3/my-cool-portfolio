import { useState } from "react";
import Image from "next/image";
import closedEye from "@/public/images/closedEye.png";
import openEye from "@/public/images/openEye.png";

const Header = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(true);
  return (
    <header className="my-[3rem]">
      <div className="font-bebas text-[8rem]">
        <div
          className="flex items-center gap-[1rem]"
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
      </div>
    </header>
  );
};
export default Header;
