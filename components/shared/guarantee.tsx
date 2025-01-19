import React from "react";
import CustomPortableText from "./customPortableText";
import { Guarantee as GuaranteeType } from "@/sanity/types";
import Image from "next/image";

type GuaranteeProps = {
  guarantee: GuaranteeType;
  number: number;
};

const Guarantee = ({
  number,
  guarantee: { title, description },
}: GuaranteeProps) => {
  return (
    <article className="md:mx-auto md:max-w-[82rem]">
      <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-[1.6rem] md:gap-[5.4rem]">
        <div className="relative hidden sm:block sm:aspect-square sm:w-[6rem] md:w-[15rem]">
          <Image
            fill
            className="h-full w-full object-cover"
            src="/images/guarantee-badge.png"
            alt="Guarantee Badge"
          />
        </div>
        <div>
          <p className="mb-[1rem]">
            <strong>Guarantee #{number}</strong>
          </p>
          <h3 className="mb-[1.6rem] text-[2rem] font-semibold leading-[3.6rem] text-marine md:text-[3rem] md:leading-[5.5rem]">
            {title}
          </h3>
          <div className="text-[1.6rem] leading-[3.2rem]">
            <CustomPortableText value={description!} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Guarantee;
