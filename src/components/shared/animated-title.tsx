import { useRef, type FC } from "react";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {
  title: string;
  className?: string;
  variant?: number;
  textClassName?: string;
  decorClassName?: string;
}

export const AnimatedTitle: FC<Props> = ({
  title,
  className,
  variant = 1,
  textClassName,
  decorClassName,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      // Начальное состояние
      gsap.set(containerRef.current, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "center center",
      });

      // Анимация
      gsap.to(containerRef.current, {
        opacity: 1,
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto",
      });

      // Дополнительная анимация для текста (опционально)
      gsap.from(textRef.current, {
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out",
      });
    },
    { scope: containerRef, dependencies: [title] }
  );

  return (
    <div
      ref={containerRef}
      className={clsx(
        "will-change-transform", // Оптимизация для анимации
        "overflow-hidden inline-block relative",
        className,
        variant === 1 ? "bg-light-brown" : "bg-dark-brown relative z-10"
      )}
    >
      {variant === 2 && (
        <div
          className={clsx(
            "h-[0.5vw] w-full bg-light-bg absolute bottom-0 right-0 -rotate-[1.5deg]",
            decorClassName
          )}
        />
      )}
      <h1
        ref={textRef}
        className={clsx(
          "text-[8.95vw] uppercase leading-[105%] text-white-text pl-[1vw] pr-[1.3vw] pb-[1.5vw] font-bold",
          textClassName
        )}
      >
        {title}
      </h1>
    </div>
  );
};
