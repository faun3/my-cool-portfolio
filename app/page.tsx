"use client";
export default function Home() {
  const words = "artist,lover,friend,developer,creator,human,dreamer".split(
    ","
  );
  const fonts = "font-saint,font-destra,font-honey".split(",");
  return (
    <>
      {/* R2L text carousel */}
      {/* credit: https://olavihaapala.fi/2021/02/23/modern-marquee.html */}
      <div
        className="flex whitespace-nowrap overflow-x-scroll motion-safe:overflow-x-hidden relative group"
        aria-hidden="true"
      >
        <div className="flex motion-safe:animate-marquee group-hover:pause">
          {words.map((word, idx) => {
            return (
              <span
                key={idx}
                className={`${
                  fonts[idx % fonts.length]
                } text-[128px] m-4 uppercase`}
              >
                {word}
              </span>
            );
          })}
        </div>
        <div className="absolute top-0 flex motion-safe:animate-marquee2 group-hover:pause">
          {words.map((word, idx) => {
            return (
              <span
                key={idx}
                className={`${
                  fonts[idx % fonts.length]
                } text-[128px] m-4 uppercase`}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
