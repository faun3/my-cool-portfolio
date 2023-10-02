import star from "@/public/icons/star.svg";
import Image from "next/image";

export default function TextMarquee() {
  return (
    <div
      className="flex whitespace-nowrap overflow-x-scroll motion-safe:overflow-x-hidden relative group overflow-y-hidden left-0"
      aria-hidden="true">
      <div className="flex motion-safe:animate-marquee group-hover:pause text-[10rem] md:text-[12rem] items-center">
        <span className="m-4 uppercase font-bebas">
          die boring or live trying
        </span>
        <div className="w-[1em] h-[1em] m-4">
          <Image
            src={star}
            alt=""
            aria-hidden
          />
        </div>
        <span className="m-4 uppercase font-bebas">
          die boring or live trying
        </span>
        <div className="w-[1em] h-[1em] m-4">
          <Image
            src={star}
            alt=""
            aria-hidden
          />
        </div>
      </div>
      <div className="flex motion-safe:animate-marquee group-hover:pause text-[10rem] md:text-[12rem] items-center">
        <span className="m-4 uppercase font-bebas">
          die boring or live trying
        </span>
        <div className="w-[1em] h-[1em] m-4">
          <Image
            src={star}
            alt=""
            aria-hidden
          />
        </div>
        <span className="m-4 uppercase font-bebas">
          die boring or live trying
        </span>
        <div className="w-[1em] h-[1em] m-4">
          <Image
            src={star}
            alt=""
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
