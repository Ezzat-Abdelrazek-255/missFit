import React from "react";
import Subtitle from "./subtitle";
import CustomPortableText from "@/components/shared/customPortableText";
import Phases from "@/components/shared/phases";
import { Phases as PhasesType } from "@/sanity/types";

type PhasesSectionProps = { phases: PhasesType };

const PhasesSection = ({ phases: { title, description, phases, footnote } }: PhasesSectionProps) => {
  return (
    <section className="sm:mx-auto sm:max-w-[var(--container-max-width)]">
      <Subtitle>{title}</Subtitle>
      <div className="mb-[5rem] text-center sm:mx-auto sm:max-w-[38rem]">
        <CustomPortableText value={description!} />
      </div>
      <div className="mb-[3.2rem]">
        <Phases phases={phases!} />
      </div>
      <div>
        <CustomPortableText value={footnote!} />
      </div>
    </section>
  );
};

export default PhasesSection;
