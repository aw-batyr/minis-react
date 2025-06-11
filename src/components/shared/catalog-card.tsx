import clsx from "clsx";
import type { FC } from "react";

interface Props {
  className?: string;
  title: string;
  imgUrl: string;
  imgPos: string;
}

export const CatalogCard: FC<Props> = ({
  className,
  title,
  imgUrl,
  imgPos,
}) => {
  return (
    <article
      className={clsx(
        "bg-[#F2D5C0] overflow-hidden w-[22vw] h-[14vw] outline-[0.3vw] outline-[#FAEADE] rounded-[1.5vw]",
        className
      )}
    >
      <img
        src={imgUrl}
        alt={title}
        className={clsx("absolute right-10 top-10", imgPos)}
      />
      <h3
        dangerouslySetInnerHTML={{ __html: title }}
        className="text-[2.2vw] uppercase absolute text-left leading-[100%] -tracking-[.1vw] left-[1.5vw] bottom-[1.5vw] text-[#523122]"
      ></h3>
    </article>
  );
};
