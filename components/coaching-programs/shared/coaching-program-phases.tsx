import CustomPortableText from "@/components/shared/customPortableText";
import Phases from "@/components/shared/phases";
import { Phases as PhasesType } from "@/sanity/types";
import React from "react";
import CoachingProgramSubtitle from "./coaching-program-subtitle";

type CoachingProgramsPhasesProps = { phases: PhasesType };

const CoachingProgramPhases = ({
  phases: { title, description, phases, footnote },
}: CoachingProgramsPhasesProps) => {
  return (
    <section>
      <CoachingProgramSubtitle>{title}</CoachingProgramSubtitle>
      <div className="mb-[5rem]">
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

export default CoachingProgramPhases;
