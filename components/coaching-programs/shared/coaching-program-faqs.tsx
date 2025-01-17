import { Faqs as FaqsType } from "@/sanity/types";
import React from "react";
import CoachingProgramSubtitle from "./coaching-program-subtitle";
import Faqs from "@/components/shared/faqs";

type CoachingProgramFaqsProps = {
  faqs: FaqsType;
};

const CoachingProgramFaqs = ({ faqs }: CoachingProgramFaqsProps) => {
  return (
    <section>
      <CoachingProgramSubtitle>{faqs.title}</CoachingProgramSubtitle>
      <Faqs faqs={faqs.faqs!} />
    </section>
  );
};

export default CoachingProgramFaqs;
