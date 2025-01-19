import SectionTitle from "@/components/shared/section-title";
import { Testimonials as TestimonialsType } from "@/sanity/types";
import { cn } from "@/utils";
import React from "react";
import MiniTestimonials from "./mini-testimonials";

type MiniTestimonialsSectionProps = {
  testimonials: TestimonialsType;
  className?: string;
};

const MiniTestimonialsSection = ({
  testimonials,
  className,
}: MiniTestimonialsSectionProps) => {
  return (
    <section
      className={cn(
        "px-[var(--container-padding-x)] py-[var(--container-padding-y)] text-black",
        className,
      )}
    >
      <SectionTitle>{testimonials.title}</SectionTitle>
      {testimonials.testimonials && (
        <MiniTestimonials testimonials={testimonials.testimonials} />
      )}
    </section>
  );
};

export default MiniTestimonialsSection;
