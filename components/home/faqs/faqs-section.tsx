import SectionTitle from "@/components/shared/section-title";
import { sanityClient } from "@/sanity/lib/client";
import { FAQS_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Faqs from "./faqs";

const FaqsSection = async () => {
  const sanityResponse = await sanityClient.fetch(FAQS_QUERY);
  const content = sanityResponse?.faqs;

  if (!content) return null;

  return (
    <section className="px-[var(--container-padding-x)] py-[var(--container-padding-y)]">
      <SectionTitle>{content.title}</SectionTitle>
      <Faqs />
    </section>
  );
};

export default FaqsSection;
