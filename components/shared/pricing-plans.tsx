import { PricingPlan as PricingPlanType } from "@/sanity/types";
import React from "react";
import PricingPlan from "./pricing-plan";

type PricingPlans = {
  pricingPlans: PricingPlanType[];
};

const PricingPlans = ({ pricingPlans }: PricingPlans) => {
  return (
    <ul className="grid grid-cols-1 gap-[5rem] md:grid-cols-[auto_auto_1fr] md:justify-center">
      {pricingPlans.map((pricingPlan) => (
        <li key={pricingPlan.title}>
          <PricingPlan pricingPlan={pricingPlan} />
        </li>
      ))}
    </ul>
  );
};

export default PricingPlans;
