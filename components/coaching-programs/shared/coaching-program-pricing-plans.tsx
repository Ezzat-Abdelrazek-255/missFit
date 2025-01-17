import CustomPortableText from "@/components/shared/customPortableText";
import PricingPlans from "@/components/shared/pricing-plans";
import { PricingPlans as PricingPlansType } from "@/sanity/types";
import React from "react";
import CoachingProgramSubtitle from "./coaching-program-subtitle";

type CoachingProgramPricingPlansProps = { pricingPlans: PricingPlansType };

const CoachingProgramPricingPlans = ({
  pricingPlans: { title, description, pricingPlans },
}: CoachingProgramPricingPlansProps) => {
  return (
    <section>
      <CoachingProgramSubtitle>{title}</CoachingProgramSubtitle>
      <div className="mb-[5rem] text-center">
        <CustomPortableText value={description!} />
      </div>
      <PricingPlans pricingPlans={pricingPlans!} />
    </section>
  );
};

export default CoachingProgramPricingPlans;
