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
      gsap.from(containerRef.current, {
        width: 0,
        autoAlpha: 0,
        willChange: "opacity width",
        transformOrigin: "center center",
      });
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
        },
        autoAlpha: 1,
        duration: 1,
        delay: 1,

        width: "auto",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={clsx(
        "will-change-transform", // Оптимизация для анимации
        "overflow-hidden inline-block relative whitespace-nowrap",
        className,
        variant === 1 ? "bg-light-brown" : "bg-dark-brown relative z-10"
      )}
    >
      {variant === 2 && (
        <div
          className={clsx(
            "h-[0.5vw] w-full bg-light-bg absolute bottom-0 right-0 -rotate-[1.5deg] whitespace-nowrap",
            decorClassName
          )}
        />
      )}
      <h1
        ref={textRef}
        className={clsx(
          "text-[8.95vw] uppercase leading-[105%] whitespace-nowrap text-white-text pl-[1vw] pr-[1.3vw] pb-[1.5vw] font-bold",
          textClassName
        )}
      >
        {title}
      </h1>
    </div>
  );
};
