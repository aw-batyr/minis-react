import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, type FC } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Products: FC = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      document.fonts.ready.then(() => {
        const { chars } = new SplitText(textRef.current, {
          type: "chars, lines",
          charsClass: "char++",
          linesClass: "product-line++",
          mask: "lines",
        });

        gsap.from(chars, {
          scrollTrigger: {
            trigger: chars,
            scrub: true,
            start: "top bottom",
            end: "bottom center",
            markers: false,
          },
          y: 100,
          stagger: 0.1,
          duration: 0.4,
        });
      });

      gsap.fromTo(
        textRef.current,
        {
          width: 0,
          transformOrigin: "center center",
        },
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: textRef.current,
          willChange: "transform, opacity",
        }
      );
    },

    {
      scope: containerRef,
    }
  );

  return (
    <section
      ref={containerRef}
      className="h-screen flex items-center relative track uppercase px-[5vw] text-[7vw] text-[#553124]"
    >
      <div className="w-1/2">
        <h2 ref={textRef} className="text whitespace-nowrap">
          Bizde 6
          <br />
          GORNUSH BAR
        </h2>

        <div className="text-light-brown-block overflow-hidden leading-none !pb-[1vw] border-[0.4vw] relative z-50 text-light-brown-block -rotate-[6deg] !px-[3vw] !text-[6vw] pos-y left-[12vw]">
          Mini’s
        </div>
      </div>
      <div className="flex items-center">
        <img src="/products/product-1.png" alt="" />
      </div>
    </section>
  );
};
