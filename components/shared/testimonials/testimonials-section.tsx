import React from "react";
import SectionTitle from "../section-title";
import Testimonials from "./testimonials";
import { Testimonials as TestimonialsType } from "@/sanity/types";
import { cn } from "@/utils";

type TestimonialsSectionProps = {
  testimonials: TestimonialsType;
  className?: string;
};

const TestimonialsSection = ({
  testimonials,
  className,
}: TestimonialsSectionProps) => {
  return (
    <section
      className={cn(
        "px-[var(--container-padding-x)] py-[var(--container-padding-y)] text-black md:px-0 md:pl-[var(--container-padding-x)]",
        className,
      )}
    >
      <SectionTitle>{testimonials.title}</SectionTitle>
      {testimonials.testimonials && (
        <Testimonials testimonials={testimonials.testimonials} />
      )}
    </section>
  );
};

export default TestimonialsSection;
