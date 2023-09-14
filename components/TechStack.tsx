const TechStack = () => {
  //   maybe make this a reveal component
  //   and add a media query for mobile so this content is still visible
  return (
    <>
      <div className="flex flex-row gap-[0.4rem] flex-wrap">
        <span className="font-bebas heading-2">web design</span>
        <span className="font-bebas heading-2 min-w-[1/3]">
          web development
        </span>
        <span className="font-bebas heading-2 min-w-[1/3]">next.js</span>
        <span className="font-bebas heading-2 min-w-[1/3]">astro</span>
        <span className="font-bebas heading-2 min-w-[1/3]">tailwindcss</span>
      </div>
    </>
  );
};
export default TechStack;
