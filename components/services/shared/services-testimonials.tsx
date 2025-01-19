import TestimonialsSection from "@/components/shared/testimonials/testimonials-section";
import { Testimonials as TestimonialsType } from "@/sanity/types";
import React from "react";

type ServicesTestimonialsProps = {
  testimonials: TestimonialsType;
};

const ServicesTestimonials = ({ testimonials }: ServicesTestimonialsProps) => {
  return <TestimonialsSection testimonials={testimonials} />;
};

export default ServicesTestimonials;
