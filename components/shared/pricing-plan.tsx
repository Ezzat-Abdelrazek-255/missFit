import { PricingPlan as PricingPlanType } from "@/sanity/types";
import React from "react";
import CorrectIcon from "@/public/icons/correct.svg";
import CoachingProgramButton from "../coaching-programs/shared/coaching-program-button";

type PricingPlanProps = {
  pricingPlan: PricingPlanType;
};

const PricingPlan = ({ pricingPlan }: PricingPlanProps) => {
  return (
    <article className="px-[2.4rem] pb-[5rem] pt-[3.2rem] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]">
      <p className="mb-[2.2rem] text-center text-[1.8rem] font-semibold uppercase leading-[3.6rem]">
        {pricingPlan.tag}
      </p>
      <h3 className="mb-[3.8rem] text-center text-[2.8rem] font-bold leading-[4.2rem]">
        {pricingPlan.title}
        <span className="text-[2rem]"> of</span>
        <br />
        <span className="text-pink">${pricingPlan.price}</span>
      </h3>
      <ul className="mb-[4rem] flex flex-col gap-[1.6rem] leading-[2rem]">
        {pricingPlan.benefits &&
          pricingPlan.benefits.map((benefit) => (
            <li
              key={benefit}
              className="grid grid-cols-[auto_1fr] gap-[0.8rem]"
            >
              <CorrectIcon width={16} height={16} />
              <span>{benefit}</span>
            </li>
          ))}
      </ul>
      <div className="grid place-content-center">
        <CoachingProgramButton>Order now</CoachingProgramButton>
      </div>
    </article>
  );
};

export default PricingPlan;
