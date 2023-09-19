import Image from "next/image";
import aboutImage from "@/public/images/aboutImage.jpg";

const About = () => {
  return (
    <div className="mb-[8rem] flex flex-col md:flex-row justify-center items-center gap-[8rem]">
      <div>
        <p className="heading-2">More cool text here</p>
        <p className="body-2">
          This should be some about me text. Cool Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="w-[90%] rounded-[20px] overflow-hidden">
        <Image
          className="object-cover"
          src={aboutImage}
          alt="room with plants"></Image>
      </div>
    </div>
  );
};
export default About;
