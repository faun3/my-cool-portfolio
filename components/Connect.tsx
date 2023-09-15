import Link from "next/link";
import Image from "next/image";
import githubIcon from "@/public/icons/githubIcon.svg";
import linkedInIcon from "@/public/icons/linkedInIcon.svg";

const Connect = () => {
  return (
    <>
      <div className="mb-[8rem] bg-[#aba0a0] rounded-[20px] w-fit p-[4rem] px-[6rem] mx-auto">
        <div className="rounded-full aspect-square w-[100%] flex justify-center items-center bg-[#eee8e8] mx-auto mb-[4rem]">
          <Link
            href={"#"}
            className="body-2">
            say hi :&#41;
          </Link>
        </div>
        <p className="mb-[1rem] text-[1.125rem]">myemailhere@gmail.com</p>
        <div className="flex flex-row gap-[1rem] justify-center">
          <Link href={"#"}>
            <Image
              src={githubIcon}
              width={48}
              height={48}
              alt="github link"></Image>
          </Link>
          <Link href={"#"}>
            <Image
              src={linkedInIcon}
              width={48}
              height={48}
              alt="linked in link"></Image>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Connect;
