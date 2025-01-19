import { PricingPlan as PricingPlanType } from "@/sanity/types";
import React from "react";
import PricingPlan from "./pricing-plan";

type PricingPlans = {
  pricingPlans: PricingPlanType[];
};

const PricingPlans = ({ pricingPlans }: PricingPlans) => {
  return (
    <ul className="flex flex-col gap-[5rem] md:flex-row md:justify-center">
      {pricingPlans.map((pricingPlan) => (
        <li key={pricingPlan.title}>
          <PricingPlan pricingPlan={pricingPlan} />
        </li>
      ))}
    </ul>
  );
};

export default PricingPlans;
