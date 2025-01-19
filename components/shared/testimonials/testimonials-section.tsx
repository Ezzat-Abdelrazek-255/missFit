import React from "react";
import SectionTitle from "../section-title";
import Testimonials from "./testimonials";
import { Testimonials as TestimonialsType } from "@/sanity/types";

type TestimonialsSectionProps = {
  testimonials: TestimonialsType;
};

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section className="py-[var(--container-padding-y)] text-black md:pl-[var(--container-padding-x)]">
      <SectionTitle>{testimonials.title}</SectionTitle>
      {testimonials.testimonials && (
        <Testimonials testimonials={testimonials.testimonials} />
      )}
    </section>
  );
};

export default TestimonialsSection;
