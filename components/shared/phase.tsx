import { PhaseType } from "@/types";
import React from "react";
import CustomPortableText from "./customPortableText";
import CorrectIcon from "@/public/icons/correct.svg";

type PhaseProps = { number: number; phase: PhaseType };

const Phase = ({
  number,
  phase: { title, description, outcomes },
}: PhaseProps) => {
  return (
    <article className="mx-auto max-w-[370px] px-[2.4rem] py-[3rem] shadow-[0_2.5px_12px_0px_rgba(0,0,0,0.05)] md:max-w-[60rem]">
      <p className="mb-[0.4rem] text-center text-[1.3rem] font-semibold leading-[2.2rem] text-pink sm:text-[1rem] md:mb-[0.8rem] md:text-[1.5rem] md:leading-[1.8rem]">
        Phase {number}
      </p>
      <h3 className="mb-[0.8rem] text-center text-[2rem] font-semibold leading-[2.4rem] text-marine sm:text-[1.5rem] sm:leading-[1.8rem] md:mb-[1.4rem] md:text-[2.4rem] md:leading-[2.8rem]">
        {title}
      </h3>
      <div className="mb-[2rem] sm:text-center">
        <CustomPortableText value={description!} />
      </div>
      <ul className="flex flex-col gap-[2.4rem] sm:grid sm:grid-cols-2 sm:text-[1rem] sm:leading-[1.4rem] md:text-[1.4rem]">
        {outcomes &&
          outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex items-center gap-[1.2rem] sm:gap-[0.6rem]"
            >
              <CorrectIcon style={{ width: "16px", height: "16px" }} />
              <span>{outcome}</span>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default Phase;
