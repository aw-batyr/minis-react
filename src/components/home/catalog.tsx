import { CatalogCard } from "../shared/catalog-card";

const cards = [
  {
    title: "mini's <br /> umbrella",
    imgUrl: "/catalog/1.png",
    className: "absolute left-0 -rotate-[10deg] top-[10vw]",
    imgPos: "absolute top-[0.5vw] right-[3vw]",
  },
  {
    title: "mini's dragee",
    imgUrl: "/catalog/2.png",
    className: "absolute pos-x bottom-[2vw] rotate-[4deg]",
    imgPos: "pos-x top-[1vw]",
  },
  {
    title: "mini's <br /> cornetto",
    imgUrl: "/catalog/3.png",
    className: "absolute right-0 top-[8vw]",
    imgPos: "absolute top-[1.5vw] right-[1vw]",
  },
];

export const Catalog = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center">
      <h3
        id="catalog-title"
        className="text-[#865720] font-bold text-[2vw] mb-[1.25vw]"
      >
        Our Story Begins
      </h3>
      <p className="text-[#523122] proxima w-[46vw] text-[0.93vw] leading-[100%]">
        Minis was born from a simple yet powerful idea: to create miniature
        delights that bring joy. Founded by a team of food enthusiasts, we've
        dedicated ourselves to crafting bite-sized treats that not only satisfy
        your taste buds but also brighten your day. Our journey began with the
        vision of redefining snacking.
      </p>

      <div className="relative flex items-center justify-center w-[58vw] h-[20vw]">
        {cards.map((item, i) => (
          <CatalogCard {...item} key={i} />
        ))}
      </div>

      <button className="btn mt-[7vw]">Download Catalog</button>
    </section>
  );
};
