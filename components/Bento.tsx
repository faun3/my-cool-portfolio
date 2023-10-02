import BentoCell from "./BentoCell";
import bentoTest from "@/public/images/bentoTest.jpg";

const Bento = () => {
  return (
    <div className="w-full">
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col aspect-square w-1/3">
          <BentoCell
            pathToIcon={bentoTest}
            text="react"
          />

          <div className="aspect-square w-1/3">
            <BentoCell
              pathToIcon={bentoTest}
              text="react"
            />
          </div>
        </div>
        <BentoCell
          pathToIcon={bentoTest}
          text="react"
        />
      </div>
      <BentoCell
        pathToIcon=""
        text="plants"
      />
    </div>
  );
};
export default Bento;
