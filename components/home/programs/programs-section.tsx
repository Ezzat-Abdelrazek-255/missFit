import SectionTitle from "@/components/shared/section-title";
import { sanityClient } from "@/sanity/lib/client";
import { PROGRAMS_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Programs from "./programs";

const ProgramsSection = async () => {
  const sanityResponse = await sanityClient.fetch(PROGRAMS_QUERY);
  const content = sanityResponse?.programs;

  if (!content) return null;

  return (
    <section className="overflow-hidden bg-gray-200 px-[var(--container-padding-x)] py-[var(--container-padding-y)] text-black">
      <SectionTitle>{content.title}</SectionTitle>
      <Programs />
    </section>
  );
};

export default ProgramsSection;
