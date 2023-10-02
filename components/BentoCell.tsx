import Image from "next/image";

type TBentoCellProps = {
  pathToIcon: any;
  text: string;
};

const BentoCell = ({ pathToIcon, text }: TBentoCellProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-[2rem] rounded-[10px] font-semibold relative overflow-hidden text-white`}>
      <Image
        src={pathToIcon}
        alt=""
        aria-hidden="true"
        className="top-0 left-0 saturate-60"
        fill={true}
      />
      <p className={`body-2 z-10 bottom-[15%] absolute`}>{text}</p>
    </div>
  );
};
export default BentoCell;
