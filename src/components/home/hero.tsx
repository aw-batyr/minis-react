import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import gsap from "gsap";

export const Hero: FC = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".dragee", {
        width: 0,
        autoAlpha: 0,
        willChange: "width opacity",
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
        <div className="pos-x top-[13vw]">
          <div className="rotate-[5deg] dragee inline-block overflow-hidden origin-center">
            <h1 className="text-light-brown-block inline-block light-text z-10 ">
              Mini’s dragee
            </h1>
          </div>
        </div>

        <div className="pos-x top-[23vw]">
          <div className="rotate-[2deg] inline-block origin-center">
            <h1 className="text-dark-brown-block inline-block dark-text overflow-hidden">
              Unrepeatable taste
            </h1>
          </div>
        </div>
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
