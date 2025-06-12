import { useGSAP } from "@gsap/react";
import { CatalogCard } from "../shared/catalog-card";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

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

gsap.registerPlugin(SplitText);

export const Catalog = () => {
  useGSAP(() => {
    const { chars } = new SplitText("#catalog-title", {
      type: "chars, lines",
      mask: "lines",
    });

    const { lines } = new SplitText("#catalog-text", {
      type: "chars, lines",
    });

    gsap.from(chars, {
      y: 200,
      duration: 0.3,
      scrollTrigger: {
        trigger: chars,
        start: "top 100%",
        end: "bottom 20%",
      },
      stagger: 0.05,
    });

    gsap.from(lines, {
      autoAlpha: 0,
      y: 100,
      duration: 0.3,
      scrollTrigger: {
        trigger: "#catalog",
        start: "top 80%",
        end: "bottom 20%",
        markers: true,
      },
      stagger: {
        each: 0.5,
        amount: 0.5,
      },
    });

    gsap.from(".catalog-card", {
      scrollTrigger: {
        trigger: ".catalog-card",
        start: "top 90%",
        end: "bottom 50%",
      },
      autoAlpha: 0,
      rotate: 0,
      ease: "back.out(1.6)",

      scrub: 1,
      y: "100%",
      duration: 1,
      stagger: {
        each: 0.1,
      },
    });
  }, {});

  return (
    <section
      id="catalog"
      className="h-screen w-full flex flex-col items-center justify-center text-center"
    >
      <h3
        id="catalog-title"
        className="text-[#865720] font-bold text-[2vw] mb-[1.25vw]"
      >
        Our Story Begins
      </h3>
      <p
        id="catalog-text"
        className="text-[#523122] proxima will-change-transform w-[46vw] text-[0.93vw] leading-[100%]"
      >
        Minis was born from a simple yet powerful idea: to create miniature
        delights that bring joy. Founded by a team of food enthusiasts, we've
        dedicated ourselves to crafting bite-sized treats that not only satisfy
        your taste buds but also brighten your day. Our journey began with the
        vision of redefining snacking.
      </p>

      <div className="relative flex items-center justify-center w-[58vw] h-[20vw]">
        {cards.map((item, i) => (
          <CatalogCard
            {...item}
            key={i}
            className={`catalog-card will-change-transform ${item.className}`}
          />
        ))}
      </div>

      <button className="btn mt-[7vw]">Download Catalog</button>
    </section>
  );
};
