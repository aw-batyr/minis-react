import { useGSAP } from "@gsap/react";
import { useRef, type FC } from "react";
import gsap from "gsap";

// Тип для направления анимации
type AnimationDirection = "top" | "bottom" | "left" | "right";

// Интерфейс для декоративных элементов
interface AnimatedItem {
  src: string;
  className: string;
  direction: AnimationDirection;
  distance: number;
  delay: number;
  parallax?: boolean;
}

export const Hero: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const decorItemsRef = useRef<(HTMLImageElement | null)[]>([]);
  const animatedItemsRef = useRef<(HTMLImageElement | null)[]>([]);

  // Конфигурация декоративных элементов
  const animatedItems: AnimatedItem[] = [
    // Декорации
    {
      src: "/hero/decor.png",
      className: "absolute left-0 top-[6vw] h-[15vw] object-contain",
      direction: "left",
      distance: 300,
      delay: 0.2,
      parallax: true,
    },
    {
      src: "/hero/decor-2.png",
      className:
        "absolute top-[7vw] left-[33vw] z-50 size-[4vw] object-contain",
      direction: "top",
      distance: 200,
      delay: 0.3,
      parallax: true,
    },
    {
      src: "/hero/decor-3.png",
      className:
        "absolute -top-[1vw] right-[18vw] z-50 size-[20vw] -rotate-[25deg] object-contain",
      direction: "right",
      distance: 400,
      delay: 0.4,
      parallax: true,
    },
    {
      src: "/hero/decor-4.png",
      className:
        "absolute top-[19vw] right-[22vw] z-50 size-[3.9vw] -rotate-[25deg] object-contain",
      direction: "right",
      distance: 250,
      delay: 0.5,
      parallax: true,
    },
    {
      src: "/hero/decor-5.png",
      className:
        "absolute top-[10vw] right-0 z-50 size-[18vw] rotate-3 object-contain",
      direction: "right",
      distance: 500,
      delay: 0.6,
      parallax: true,
    },
    {
      src: "/hero/decor-6.png",
      className:
        "absolute bottom-[6vw] left-[30vw] z-50 size-[18vw] rotate-3 object-contain",
      direction: "bottom",
      distance: 350,
      delay: 0.7,
      parallax: true,
    },

    // Продукты
    {
      src: "/hero/product.png",
      className:
        "left-product md:-bottom-[4vw] md:!rotate-[20deg] -rotate-[50deg] -bottom-[5vw] absolute md:-left-[5vw] -left-[15vw] md:!w-[26vw] !w-[60vw] h-auto object-contain",
      direction: "bottom",
      distance: 400,
      delay: 1.0,
      parallax: false,
    },
    {
      src: "/hero/brown-product.png",
      className:
        "center-product md:-bottom-[5vw] bottom-[45vw] md:!-rotate-[15deg] rotate-0 absolute md:left-[30vw] left-[17vw] md:!w-[26vw] !w-[60vw] h-auto object-contain",
      direction: "bottom",
      distance: 400,
      delay: 1.2,
      parallax: false,
    },
    {
      src: "/hero/blue-product.png",
      className:
        "right-product md:-bottom-[3vw] -bottom-[5vw] absolute md:-right-[5vw] !rotate-[30deg]  md:!-rotate-[10deg] -right-[10vw] md:!w-[26vw] !w-[60vw] h-auto object-contain",
      direction: "bottom",
      distance: 400,
      delay: 1.4,
      parallax: false,
    },
  ];

  useGSAP(
    () => {
      const master = gsap.timeline({ delay: 3 });

      master.fromTo(
        "#dragee",
        { width: 0, opacity: 0 },
        { width: "auto", opacity: 1, duration: 0.4 }
      );
      master.fromTo(
        "#taste",
        { width: 0, opacity: 0 },
        { width: "auto", opacity: 1, duration: 0.4 }
      );

      animatedItems.forEach((item, index) => {
        const element = animatedItemsRef.current[index];
        if (!element) return;

        // Начальные позиции за пределами экрана
        const startPositions: Record<AnimationDirection, GSAPTweenVars> = {
          top: { y: -item.distance, opacity: 0 },
          bottom: { y: item.distance, opacity: 0 },
          left: { x: -item.distance, opacity: 0 },
          right: { x: item.distance, opacity: 0 },
        };

        gsap.set(element, startPositions[item.direction]);

        master.to(
          element,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            overwrite: "auto",
          },
          "<"
        );
      });
      const parallaxEffect = (e: MouseEvent) => {
        const sensitivity = 0.1;
        const maxOffset = 50;

        const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        const mouseY = (e.clientY / window.innerHeight) * 2 - 1;

        decorItemsRef.current.forEach((item) => {
          gsap.to(item, {
            x: mouseX * maxOffset * sensitivity,
            y: mouseY * maxOffset * sensitivity,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      window.addEventListener("mousemove", parallaxEffect);

      return () => window.removeEventListener("mousemove", parallaxEffect);
    },
    { scope: containerRef }
  );

  // Вспомогательная функция для добавления ref
  const addToAnimatedItemsRefs = (
    el: HTMLImageElement | null,
    index: number
  ) => {
    animatedItemsRef.current[index] = el;
  };

  return (
    <section
      ref={containerRef}
      className="relative md:h-screen h-[70vh] overflow-hidden"
    >
      {/* Текстовый блок */}
      <div className="relative z-10">
        <div className="absolute left-1/2 md:top-[13vw] top-[32vw] z-10 -translate-x-1/2">
          <div
            id="dragee"
            className="overflow-hidden rotate-[5deg] will-change-transform"
          >
            <h1 className="inline-block ligth-text text-light-brown-block z-20 overflow-hidden">
              Mini's dragee
            </h1>
          </div>
        </div>

        <div className="absolute left-1/2 md:top-[23vw] top-[45vw] -translate-x-1/2">
          <div
            id="taste"
            className="overflow-hidden rotate-[2deg] will-change-transform"
          >
            <h1 className="inline-block dark-text text-dark-brown-block overflow-hidden">
              Unrepeatable taste
            </h1>
          </div>
        </div>
      </div>
      {animatedItems.map((item, index) => (
        <img
          key={`${item.src}-${index}`}
          ref={(el) => addToAnimatedItemsRefs(el, index)}
          src={item.src}
          className={item.className}
          alt={`Animated element ${index + 1}`}
        />
      ))}{" "}
    </section>
  );
};
