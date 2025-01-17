import React from "react";
import CustomPortableText from "./customPortableText";
import { Guarantee as GuaranteeType } from "@/sanity/types";

type GuaranteeProps = {
  guarantee: GuaranteeType;
  number: number;
};

const Guarantee = ({
  number,
  guarantee: { title, description },
}: GuaranteeProps) => {
  return (
    <article>
      <p className="mb-[1rem]">
        <strong>Guarantee #{number}</strong>
      </p>
      <h3 className="mb-[1.6rem] text-[2rem] font-semibold leading-[3.6rem] text-marine">
        {title}
      </h3>
      <div className="text-[1.6rem] leading-[3.2rem]">
        <CustomPortableText value={description!} />
      </div>
    </article>
  );
};

export default Guarantee;
