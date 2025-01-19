//TODO Fix careerCoach Type Error
import CoachingProgramCareerCoach from "@/components/coaching-programs/shared/coaching-program-career-coach";
import CoachingProgramGuarantees from "@/components/coaching-programs/shared/coaching-program-guarantees";
import CoachingProgramPricingPlans from "@/components/coaching-programs/shared/coaching-program-pricing-plans";
import CoachingProgramTitle from "@/components/coaching-programs/shared/coaching-program-title";
import CustomPortableText from "@/components/shared/customPortableText";
import FaqsSection from "@/components/shared/faqs-section";
import PhasesSection from "@/components/shared/phases-section";
import SecondaryButton from "@/components/shared/secondary-button";
import SecondaryHero from "@/components/shared/secondary-hero";
import { sanityClient } from "@/sanity/lib/client";
import {
  JOB_SEARCH_QUERY,
  CAREER_COACHING_QUERY,
  EXECUTIVE_COACHING_QUERY,
} from "@/sanity/lib/queries";
import React from "react";

type CoachingProgramProps = {
  query:
  | typeof JOB_SEARCH_QUERY
  | typeof CAREER_COACHING_QUERY
  | typeof EXECUTIVE_COACHING_QUERY;
};

const CoachingProgram = async ({ query }: CoachingProgramProps) => {
  const content = await sanityClient.fetch(query);
  if (!content) return null;

  return (
    <div className="space-y-[10rem] sm:space-y-[5rem]">
      {/* Hero */}
      <SecondaryHero>
        <CoachingProgramTitle>{content?.title}</CoachingProgramTitle>
        <div className="mb-[4rem] text-[1.9rem] sm:mb-[3.2rem] sm:max-w-[34rem] sm:text-[1.3rem] sm:leading-[1.5rem] md:max-w-[52rem] md:text-[2rem] md:leading-[4rem]">
          <CustomPortableText value={content.description!} />
        </div>
        <SecondaryButton>{content.cta?.label}</SecondaryButton>
      </SecondaryHero>

      {/* First Paragraph*/}
      <div className="mb-[3.2rem] sm:mx-auto sm:max-w-[var(--container-max-width)]">
        <CustomPortableText value={content.firstParagraph!} />
      </div>

      {/* Phases */}
      <div>
        <PhasesSection phases={content.phases!} />
      </div>
      {/* Career Coach */}
      <div>
        <CoachingProgramCareerCoach careerCoach={content.careerCoach!} />
      </div>
      {/* Gurantees  */}
      <div>
        <CoachingProgramGuarantees guarantees={content.guarantees!} />
      </div>
      {/* Pricing Plans */}
      <div>
        <div>
          <CoachingProgramPricingPlans pricingPlans={content.pricingPlans!} />
        </div>
        {/* FAQS */}
        <div>
          <FaqsSection faqs={content.faqs!} />
        </div>
        {/* Second Paragraph */}
        <div className="mx-auto sm:max-w-[37.5rem] md:max-w-[var(--container-max-width)]">
          <CustomPortableText value={content.secondParagraph!} />
        </div>
        {/* Pricing Plans */}
        <div>
          <CoachingProgramPricingPlans pricingPlans={content.pricingPlans!} />
        </div>
      </div>
    </div>
  );
};

export default CoachingProgram;
