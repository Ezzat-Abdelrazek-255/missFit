// TODO Finish the title and finish a solution to pricing
import CustomPortableText from "@/components/shared/customPortableText";
import FaqsSection from "@/components/shared/faqs-section";
import FeaturesSection from "@/components/shared/features/features-section";
import PhasesSection from "@/components/shared/phases-section";
import PricingPlansSection from "@/components/shared/pricing-plans-section";
import SecondaryButton from "@/components/shared/secondary-button";
import SecondaryHero from "@/components/shared/secondary-hero";
import MiniTestimonialsSection from "@/components/shared/testimonials/mini-testimonials-section";
import { sanityClient } from "@/sanity/lib/client";
import { RESUME_WRITING_QUERY } from "@/sanity/lib/queries";
import React from "react";
import ActivityTitle from "./activity-title";

type ActivityProps = {
  query: typeof RESUME_WRITING_QUERY;
};

const Activity = async ({ query }: ActivityProps) => {
  const content = await sanityClient.fetch(query);
  if (!content) return null;

  return (
    <div>
      <SecondaryHero className="px-[var(--container-padding-x)] md:max-w-[calc(var(--container-max-width)+20rem)]">
        <ActivityTitle>{content?.title}</ActivityTitle>
        <div className="mb-[8rem] md:mb-[3.2rem] md:text-center">
          <CustomPortableText value={content.description!} />
        </div>
        <div className="md:self-center">
          <SecondaryButton>{content.cta?.label}</SecondaryButton>
        </div>
      </SecondaryHero>
      {/* Testimonials */}
      <div className="px-[var(--container-padding-x)] md:px-0 md:pl-[var(--container-padding-x)]">
        {content.testimonials && (
          <MiniTestimonialsSection testimonials={content.testimonials} />
        )}
      </div>
      {/* Features */}
      <div>
        <FeaturesSection features={content.features!} />
      </div>
      {/* Phases */}
      <div className="px-[var(--container-padding-x)]">
        <PhasesSection phases={content.phases!} />
      </div>
      {/* FAQS*/}
      <div className="px-[var(--container-padding-x)]">
        <FaqsSection faqs={content.faqs!} />
      </div>
      {/* Resume Writing*/}
      <div className="px-[var(--container-padding-x)]">
        <PricingPlansSection pricingPlans={content.pricingPlans!} />
      </div>
    </div>
  );
};

export default Activity;
