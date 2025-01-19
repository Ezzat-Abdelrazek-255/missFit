import CustomPortableText from "@/components/shared/customPortableText";
import PricingPlans from "@/components/shared/pricing-plans";
import { PricingPlans as PricingPlansType } from "@/sanity/types";
import React from "react";
import Subtitle from "./subtitle";

type PricingPlansSectionProps = { pricingPlans: PricingPlansType };

const PricingPlansSection = ({
  pricingPlans: { title, description, pricingPlans },
}: PricingPlansSectionProps) => {
  return (
    <section className="mx-auto max-w-[var(--container-max-width)]">
      <Subtitle>{title}</Subtitle>
      <div className="mb-[5rem] text-center">
        <CustomPortableText value={description!} />
      </div>
      <PricingPlans pricingPlans={pricingPlans!} />
    </section>
  );
};

export default PricingPlansSection;
