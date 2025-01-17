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
    <article className="px-[2.4rem] py-[3rem] shadow-[0_2.5px_12px_0px_rgba(0,0,0,0.05)]">
      <p className="mb-[0.4rem] text-center text-[1.3rem] font-semibold leading-[2.2rem] text-pink">
        Phase {number}
      </p>
      <h3 className="mb-[0.8rem] text-center text-[2rem] font-semibold leading-[2.4rem] text-marine">
        {title}
      </h3>
      <div className="mb-[2rem]">
        <CustomPortableText value={description!} />
      </div>
      <ul className="flex flex-col gap-[2.4rem]">
        {outcomes &&
          outcomes.map((outcome) => (
            <li key={outcome} className="flex items-center gap-[1.2rem]">
              <CorrectIcon style={{ width: "16px", height: "16px" }} />
              <span>{outcome}</span>
            </li>
          ))}
      </ul>
    </article>
  );
};

export default Phase;
