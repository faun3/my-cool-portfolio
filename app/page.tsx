export default function Home() {
  return (
    <>
      <div className="text-[128px]">
        <h1 className="font-saint">Empty slate wow</h1>
        <h1 className="font-destra">Empty slate wow</h1>
        <h1 className="font-honey uppercase">Empty slate wow</h1>
        <h1 className="font-monor">Empty slate wow</h1>
      </div>

      {/* R2L text carousel */}
      {/* credit: https://olavihaapala.fi/2021/02/23/modern-marquee.html */}
      <div
        className="flex whitespace-nowrap overflow-x-scroll motion-safe:overflow-x-hidden relative group"
        aria-hidden="true"
      >
        <div className="flex motion-safe:animate-marquee group-hover:pause">
          <span className="font-bebas text-[128px] m-4">amazing</span>
          <span className="font-bebas text-[128px] m-4">insane</span>
          <span className="font-bebas text-[128px] m-4">ground breaking</span>
          <span className="font-bebas text-[128px] m-4">wow</span>
          <span className="font-bebas text-[128px] m-4">wow</span>
          <span className="font-bebas text-[128px] m-4">wow</span>
          <span className="font-bebas text-[128px] m-4">this is crazy</span>
        </div>
        <div className="absolute top-0 flex motion-safe:animate-marquee2 group-hover:pause">
          <span className="font-bebas text-[128px] m-4">amazing</span>
          <span className="font-bebas text-[128px] m-4">insane</span>
          <span className="font-bebas text-[128px] m-4">ground breaking</span>
          <span className="font-bebas text-[128px] m-4">wow</span>
          <span className="font-bebas text-[128px] m-4">wow</span>
          <span className="font-bebas text-[128px] m-4">wow</span>
          <span className="font-bebas text-[128px] m-4">this is crazy</span>
        </div>
      </div>
    </>
  );
}
