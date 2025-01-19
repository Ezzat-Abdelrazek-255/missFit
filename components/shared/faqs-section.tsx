import { Faqs as FaqsType } from "@/sanity/types";
import React from "react";
import Subtitle from "./subtitle";
import Faqs from "@/components/shared/faqs";
import { cn } from "@/utils";

type FaqsSectionProps = {
  faqs: FaqsType;
  className?: string;
};

const FaqsSection = ({ faqs, className }: FaqsSectionProps) => {
  return (
    <section className={cn("px-[var(--container-padding-x)]", className)}>
      <Subtitle>{faqs.title}</Subtitle>
      <Faqs faqs={faqs.faqs!} />
    </section>
  );
};

export default FaqsSection;
