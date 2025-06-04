import { useRef, type FC } from "react";
import { AnimatedTitle } from "../shared";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const Words: FC = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const { chars } = new SplitText(".text", {
        type: "chars, words, lines",
        linesClass: "++line",
        charsClass: "++char",
      });

      // Устанавливаем начальное состояние для всех букв
      gsap.set(chars, { opacity: 0.5 });

      // Анимация для каждой буквы при скролле
      chars.forEach((char: any) => {
        gsap.to(char, {
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Начинаем анимацию когда верх секции на 80% от верха viewport
            end: "top 20%", // Заканчиваем анимацию когда верх секции на 20% от верха viewport
            scrub: true,

            markers: true,
          },
        });
      });

      // Альтернативный вариант с групповой анимацией букв
      // gsap.to(chars, {
      //   opacity: 1,
      //   stagger: 0.05,
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top 80%",
      //     end: "top 20%",
      //     scrub: true,
      //   }
      // });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bg-dark-brown words relative py-[8.333vw] uppercase text-center"
    >
      <h1 className="text text-light-bronw-text text-[10vw] track ">
        Shu yere gowja
        <br />
        Moshny gowja soz
        <br />
        Yazmaly tipo slogan yaly
        <br />
        birzat bolmaly tapyndaa
      </h1>
      <h1 className="mb-[5vw]"></h1>

      <AnimatedTitle
        title="Mini's"
        textClassName="!text-dark-brown"
        className="!bg-[#E8A460] border-[1vw] border-dark-brown rotate-6 px-[3vw] left-[36vw] !margin-0 top-[25vw] !absolute"
      />

      <h1></h1>
      <h1></h1>
    </section>
  );
};
