import Link from "next/link";

const Thanks = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <div className="flex flex-col">
        <div>
          <p>Special thanks</p>
          <p>B</p>
          <p>mom</p>
          <p>friends all over</p>
        </div>
        <div>
          <p>Inspiration</p>
          <p>awwwards stuff</p>
          <p>locomotive.ca</p>
          <p>youtube and more</p>
        </div>
      </div>
      <div>
        <p>Fonts used</p>
        <p>
          Honey - by Melina Sweet <Link href={"https://melinasweet.com"} />
        </p>
        <p>Saint - by Liza Dushnota</p>
        <p>Destra - by Cedric Rossignol Brunet</p>
        <p>Monor - by Cedric Rossignol Brunet</p>
        <p>
          Bebas Neune - from{" "}
          <Link href={"https://www.fontshare.com/"}>Fontshare</Link>
        </p>
      </div>
    </div>
  );
};
export default Thanks;
