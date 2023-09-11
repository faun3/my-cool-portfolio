export default function TextMarquee() {
  const words = "artist,lover,friend,creator,human,dreamer".split(",");
  const fonts = "font-saint,font-destra,font-honey".split(",");
  {
    /* R2L text carousel */
  }
  {
    /* credit: https://olavihaapala.fi/2021/02/23/modern-marquee.html */
  }
  return (
    <div
      className="flex whitespace-nowrap overflow-x-scroll motion-safe:overflow-x-hidden relative group overflow-y-hidden left-0"
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
  );
}
