import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Program as ProgramType } from "@/sanity/types";
import { urlFor } from "@/utils";

type ProgramProps = {
  program: ProgramType;
};

const Program = ({ program }: ProgramProps) => {
  return (
    <article className="relative w-full min-w-[26rem]">
      <div className="absolute inset-0 z-base bg-gradient-to-t from-black to-transparent md:hidden"></div>
      {program.image && (
        <div className="relative mb-[4rem] h-[45.7rem] w-full">
          <Image
            src={urlFor(program.image).url()}
            className="h-full w-full object-cover object-right"
            alt={program.image.alt || ""}
            fill
          />
        </div>
      )}
      <div className="absolute bottom-0 z-base p-[1.8rem] text-white md:relative md:p-0 md:text-black">
        <h3 className="mb-[0.4rem] text-[2rem] font-semibold uppercase leading-[2.8rem] md:mb-[1.6rem] md:text-[2.4rem]">
          {program.title}
        </h3>
        <div className="text-[1.7rem] md:mb-[3.6rem] md:text-[1.8rem]">
          <PortableText value={program.description!} />
        </div>
        <Link
          className="hidden text-[1.8rem] font-medium text-gray-700 underline md:inline-block"
          href={program.cta?.url || ""}
        >
          {program.cta?.label}
        </Link>
      </div>
    </article>
  );
};

export default Program;
