import React from "react";
import TestimonialsSection from "../shared/testimonials/testimonials-section";
import { Testimonials as TestimonialsType } from "@/sanity/types";

type HomeTestimonialsType = {
  testimonials: TestimonialsType;
};

const HomeTestimonials = async ({ testimonials }: HomeTestimonialsType) => {
  return (
    <div className="px-[var(--container-padding-x)]">
      <TestimonialsSection testimonials={testimonials} />;
    </div>
  );
};

export default HomeTestimonials;
