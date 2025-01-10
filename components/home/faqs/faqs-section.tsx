import SectionTitle from "@/components/shared/section-title";
import { sanityClient } from "@/sanity/lib/client";
import { FAQS_QUERY } from "@/sanity/lib/queries";
import React from "react";

const FaqsSection = async () => {
  const sanityResponse = await sanityClient.fetch(FAQS_QUERY);
  const content = sanityResponse?.faqs;

  if (!content) return null;

  return (
    <section className="px-[var(--container-padding-x)]">
      <SectionTitle>{content.title}</SectionTitle>
    </section>
  );
};

export default FaqsSection;
