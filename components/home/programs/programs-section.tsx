import SectionTitle from "@/components/shared/section-title";
import { sanityClient } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Programs from "./programs";

const ProgramsSection = async () => {
  const sanityResponse = await sanityClient.fetch(HOME_QUERY);
  const content = sanityResponse?.programs;

  if (!content) return null;

  return (
    <section className="bg-gray-200 px-[var(--container-padding-x)] py-[var(--container-padding-y)] text-black">
      <SectionTitle>{content.title}</SectionTitle>
      {content.programs && <Programs programs={content.programs} />}
    </section>
  );
};

export default ProgramsSection;
