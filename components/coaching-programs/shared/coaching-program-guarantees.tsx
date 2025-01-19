import { Guarantees as GuaranteesType } from "@/sanity/types";
import React from "react";
import CoachingProgramSubtitle from "./coaching-program-subtitle";
import Guarantees from "@/components/shared/guarantees";

type CoachingProgramGuaranteesProps = {
  guarantees: GuaranteesType;
};

const CoachingProgramGuarantees = ({
  guarantees,
}: CoachingProgramGuaranteesProps) => {
  return (
    <section className="sm:mx-auto sm:max-w-[calc(var(--container-max-width)+12rem)] md:max-w-[calc(var(--container-max-width)+20rem)]">
      <CoachingProgramSubtitle>{guarantees.title}</CoachingProgramSubtitle>
      <div>
        <Guarantees guarantees={guarantees.guarantees!} />
      </div>
    </section>
  );
};

export default CoachingProgramGuarantees;
