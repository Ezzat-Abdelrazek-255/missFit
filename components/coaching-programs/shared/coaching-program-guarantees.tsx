import { Guarantees as GuaranteesType } from "@/sanity/types";
import React from "react";
import CoachingProgramSubtitle from "./coaching-program-subtitle";
import CustomPortableText from "@/components/shared/customPortableText";
import Guarantees from "@/components/shared/guarantees";

type CoachingProgramGuaranteesProps = {
  guarantees: GuaranteesType;
};

const CoachingProgramGuarantees = ({
  guarantees,
}: CoachingProgramGuaranteesProps) => {
  return (
    <section>
      <CoachingProgramSubtitle>{guarantees.title}</CoachingProgramSubtitle>
      <div>
        <Guarantees guarantees={guarantees.guarantees!} />
      </div>
    </section>
  );
};

export default CoachingProgramGuarantees;
