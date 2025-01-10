import { sanityClient } from "@/sanity/lib/client";
import { FEATURES_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Features from "./features";

const FeaturesSection = async () => {
  const sanityResponse = await sanityClient.fetch(FEATURES_QUERY);
  const content = sanityResponse?.features;

  if (!content) return null;

  return (
    <section className="py-[var(--container-padding-y)] text-black">
      <Features />
    </section>
  );
};

export default FeaturesSection;
