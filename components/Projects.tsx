import Image from "next/image";
import bigProject from "@/public/images/bigProject.jpg";
import mediumProject from "@/public/images/mediumProject.jpg";
import smallProject from "@/public/images/smallProject.jpg";

const Projects = () => {
  return (
    <div className="flex flex-col mb-[4rem]">
      <p className="heading-2 text-center mb-[3rem]">selected works</p>
      <div>
        <div className="mb-[2rem]">
          <div className="overflow-hidden rounded-[20px] mb-[1rem]">
            <Image src={bigProject} alt="temporary placeholder" />
          </div>
          <p>Health Website UI Rebuild - 2023</p>
        </div>
        <div className="flex flex-col md:flex-row gap-[3rem] items-center">
          <div className="md:basis-1/3">
            <div className="overflow-hidden rounded-[20px] mb-[1rem]">
              <Image src={smallProject} alt="temporary placeholder" />
            </div>
            <p>This portfolio (yes that&apos;s cheating) - 2023</p>
          </div>

          <div className="md:basis-2/3">
            <div className="overflow-hidden rounded-[20px] mb-[1rem]">
              <Image src={mediumProject} alt="temporary placeholder" />
            </div>
            <p>Blogging website - 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
