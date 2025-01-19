import { Faqs as FaqsType } from "@/sanity/types";
import React from "react";
import Subtitle from "./subtitle";
import Faqs from "@/components/shared/faqs";

type FaqsSectionProps = {
  faqs: FaqsType;
};

const FaqsSection = ({ faqs }: FaqsSectionProps) => {
  return (
    <section>
      <Subtitle>{faqs.title}</Subtitle>
      <Faqs faqs={faqs.faqs!} />
    </section>
  );
};

export default FaqsSection;
