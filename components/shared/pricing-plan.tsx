import { PricingPlan as PricingPlanType } from "@/sanity/types";
import React from "react";
import CorrectIcon from "@/public/icons/correct.svg";
import SecondaryButton from "./secondary-button";
import Image from "next/image";
import CustomPortableText from "./customPortableText";
import { cn } from "@/utils";

type PricingPlanProps = {
  pricingPlan: PricingPlanType;
};

const PricingPlan = ({ pricingPlan }: PricingPlanProps) => {
  return (
    <article
      className={cn(
        "relative mx-auto w-[37.5rem] max-w-[37.5rem] px-[2.4rem] pb-[5rem] pt-[3.2rem] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]",
        pricingPlan.previousPrice && "pt-[5rem]",
      )}
    >
      {pricingPlan.tag === "most-popular" && (
        <div className="absolute left-1/2 top-0 aspect-square w-[7rem] -translate-x-1/2 -translate-y-1/2">
          <Image
            fill
            className="h-full w-full object-cover"
            src="/images/popular-badge.png"
            alt="Popular Badge"
          />
        </div>
      )}
      {!pricingPlan.previousPrice && (
        <p className="mb-[2.2rem] text-center text-[1.8rem] font-semibold uppercase leading-[3.6rem] md:text-[1.2rem] md:leading-[2.4rem]">
          {pricingPlan.tag}
        </p>
      )}
      <h3
        className={cn(
          "mb-[0.8rem] text-center text-[2.8rem] font-bold leading-[4.2rem] md:text-[2.4rem] md:leading-[3.6rem]",
          pricingPlan.previousPrice &&
          "text-[1.8rem] font-semibold uppercase leading-[3.8rem] text-marine",
        )}
      >
        {pricingPlan.title}
        {!pricingPlan.previousPrice && <span className="text-[2rem]"> of</span>}
        <br />
      </h3>
      {pricingPlan.description && (
        <div className="mb-[4rem] text-center">
          <CustomPortableText value={pricingPlan.description!} />
        </div>
      )}
      <p
        className={cn(
          "mb-[3.8rem] text-center text-[2.8rem] font-bold leading-[4.2rem] text-pink md:text-[2.4rem] md:leading-[3.6rem]",
          pricingPlan.previousPrice &&
          "flex items-center justify-center gap-[0.8rem] text-[4rem]",
        )}
      >
        {pricingPlan.previousPrice && (
          <span className="text-[2rem] leading-[3rem] text-gray-500 line-through">
            ${pricingPlan.previousPrice}
          </span>
        )}
        ${pricingPlan.price}
      </p>
      <ul className="mb-[4rem] flex flex-col gap-[1.6rem] leading-[2rem] md:text-[1.4rem]">
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
      <div className="mb-[3.2rem] grid place-content-center">
        <SecondaryButton>Order now</SecondaryButton>
      </div>
      <div>
        <CustomPortableText value={pricingPlan.footnote!} />
      </div>
    </article>
  );
};

export default PricingPlan;
