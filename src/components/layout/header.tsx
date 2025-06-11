import clsx from "clsx";
import type { FC } from "react";
import { Burger } from "../shared";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  useGSAP(() => {
    gsap.set("#header", {
      y: "-100%",
      opacity: 0,
    });
    gsap.to("#header", {
      y: 0,
      opacity: 1,
      ease: "circ",
      delay: 2.2,
    });
  }, {});

  return (
    <header
      id="header"
      className={clsx(
        "fixed top-0 flex z-50 items-center justify-between px-[2vw] py-[1vw] w-full",
        className
      )}
    >
      <img src="/logo.svg" alt="logo" className="size-[5vw] cursor-pointer" />

      <Burger />

      <div />
    </header>
  );
};
