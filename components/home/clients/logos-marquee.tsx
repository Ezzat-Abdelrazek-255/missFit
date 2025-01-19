"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import Image from "next/image";
import { horizontalLoop, urlFor } from "@/utils";
import { Clients } from "@/sanity/types";

type LogosMarqueeProps = {
  logos: Clients["logos"];
};

const LogosMarquee = ({ logos }: LogosMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(
    function() {
      horizontalLoop(".logo-wrapper", {
        repeat: -1,
        paddingRight: 70,
        speed: 0.8,
      });
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="after:content[''] before:content[''] relative inline-flex items-center justify-start gap-[7rem] overflow-hidden before:absolute before:-left-[5rem] before:z-base before:h-full before:w-[20rem] before:bg-gradient-to-r before:from-black before:to-transparent after:absolute after:-right-[5rem] after:h-full after:w-[20rem] after:bg-gradient-to-l after:from-black after:to-transparent md:justify-center"
    >
      {logos &&
        logos.map((logo) => (
          <div
            key={logo.alt}
            className="logo-wrapper relative h-[4rem] w-[10rem]"
          >
            <Image
              fill
              src={urlFor(logo).url()}
              alt={logo.alt || ""}
              sizes="100vw"
              className="w-full object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default LogosMarquee;
