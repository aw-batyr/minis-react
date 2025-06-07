import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import gsap from "gsap";

export const Hero: FC = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".light-text", {
        autoAlpha: 0,
        duration: 0.5,
        willChange: "width",
        transformOrigin: "center center",
        width: 0,
        opacity: 0,
      });

      tl.from(".dark-text", {
        autoAlpha: 0,
        duration: 0.5,
        willChange: "width",
        textAlign: "center",
        width: 0,
        opacity: 0,
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="h-screen relative">
      <div>
        <h1 className="text-light-brown-block light-text rotate-[5deg] z-10 pos-x top-[13vw]">
          Mini’s dragee
        </h1>

        <h1 className="text-dark-brown-block dark-text rotate-[2deg] pos-x top-[23vw]">
          Unrepeatable taste
        </h1>
      </div>

      <div className="absolute left-0 top-[6vw] object-contain h-[15vw]">
        <img src="/hero/decor.png" className="size-full object-contain" />
      </div>

      <img
        src="/hero/decor-2.png"
        className="absolute top-[7vw] left-[33vw] z-50 object-contain size-[4vw] ]"
      />

      <img
        src="/hero/decor-3.png"
        className="absolute -top-[1vw] right-[18vw] -rotate-[25deg] z-50 object-contain size-[20vw]"
      />

      <img
        src="/hero/decor-4.png"
        className="absolute top-[19vw] right-[22vw] -rotate-[25deg] z-50 object-contain size-[3.9vw]"
      />

      <img
        src="/hero/decor-5.png"
        className="absolute top-[10vw] right-0 rotate-3 z-50 object-contain size-[18vw]"
      />

      <img
        src="/hero/decor-6.png"
        className="absolute bottom-[6vw] left-[30vw] rotate-3 z-50 object-contain size-[18vw]"
      />

      {/* PRODUCTS */}
      <img
        src="/hero/product.png"
        className="-bottom-[10vw] absolute left-0 w-[26vw] h-auto object-contain"
      />
      <img
        src="/hero/brown-product.png"
        className="-bottom-[10vw] absolute left-[30vw] w-[26vw] h-auto object-contain"
      />
      <img
        src="/hero/blue-product.png"
        className="-bottom-[10vw] absolute right-0 w-[26vw] h-auto object-contain"
      />
    </section>
  );
};
