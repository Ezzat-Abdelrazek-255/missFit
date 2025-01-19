import React from "react";
import Features from "./features";
import { Features as FeaturesType } from "@/sanity/types";

type FeaturesSectionProps = {
  features: FeaturesType;
};

const FeaturesSection = async ({ features }: FeaturesSectionProps) => {
  return (
    <section className="py-[var(--container-padding-y)] text-black">
      {features && <Features features={features.features!} />}
    </section>
  );
};

export default FeaturesSection;
