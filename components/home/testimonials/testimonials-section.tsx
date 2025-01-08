import SectionTitle from "@/components/shared/section-title";
import React from "react";
import Testimonials from "./testimonials";
import { sanityClient } from "@/sanity/lib/client";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";

const TestimonialsSection = async () => {
  const sanityResponse = await sanityClient.fetch(TESTIMONIALS_QUERY);
  const content = sanityResponse?.testimonials;

  if (!content) return null;

  return (
    <section className="px-[var(--container-padding-x)] py-[var(--container-padding-y)] text-black md:px-0 md:pl-[var(--container-padding-x)]">
      <SectionTitle>{content.title}</SectionTitle>
      <Testimonials />
    </section>
  );
};

export default TestimonialsSection;
