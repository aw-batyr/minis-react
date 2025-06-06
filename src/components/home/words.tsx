import { useRef, type FC } from "react";
import { AnimatedTitle } from "../shared";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Words: FC = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const { chars } = new SplitText(".text", {
        type: "chars, lines",
        linesClass: "line++",
        charsClass: "char++",
      });

      gsap.set(chars, {
        autoAlpha: 0.3,
        willChange: "opacity",
      });

      chars.forEach((char, index) => {
        gsap.to(char, {
          autoAlpha: 1,
          duration: 1,
          stagger: 0.05,
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
            end: "top 20%",
            toggleActions: "play none none none",
            markers: false,
            id: `char-${index}`,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bg-dark-brown words relative py-[8.333vw] uppercase text-center"
    >
      <h1
        ref={textRef}
        className="text text-light-bronw-text text-[10vw] track"
      >
        Shu yere gowja
        <br />
        Moshny gowja soz
        <br />
        Yazmaly tipo slogan yaly
        <br />
        birzat bolmaly tapyndaa
      </h1>

      <AnimatedTitle
        title="Mini's"
        textClassName="!text-dark-brown"
        className="!bg-[#E8A460] border-[1vw] border-dark-brown rotate-6 px-[3vw] left-[36vw] !margin-0 top-[25vw] !absolute"
      />
    </section>
  );
};
