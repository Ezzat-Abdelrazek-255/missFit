import CoachingProgramButton from "@/components/coaching-programs/shared/coaching-program-button";
import CoachingProgramCareerCoach from "@/components/coaching-programs/shared/coaching-program-career-coach";
import CoachingProgramFaqs from "@/components/coaching-programs/shared/coaching-program-faqs";
import CoachingProgramGuarantees from "@/components/coaching-programs/shared/coaching-program-guarantees";
import CoachingProgramHero from "@/components/coaching-programs/shared/coaching-program-hero";
import CoachingProgramPhases from "@/components/coaching-programs/shared/coaching-program-phases";
import CoachingProgramPricingPlans from "@/components/coaching-programs/shared/coaching-program-pricing-plans";
import CoachingProgramTitle from "@/components/coaching-programs/shared/coaching-program-title";
import CustomPortableText from "@/components/shared/customPortableText";
import { sanityClient } from "@/sanity/lib/client";
import { JOB_SEARCH_QUERY } from "@/sanity/lib/queries";
import React from "react";

const JobSearchPage = async () => {
  const content = await sanityClient.fetch(JOB_SEARCH_QUERY);
  if (!content) return null;

  return (
    <div className="space-y-[10rem] px-[2.4rem] py-[2.4rem]">
      {/* Hero */}
      <CoachingProgramHero>
        <CoachingProgramTitle>{content?.title}</CoachingProgramTitle>
        <div className="mb-[4rem] text-[1.9rem]">
          <CustomPortableText value={content.description!} />
        </div>
        <CoachingProgramButton>{content.cta?.label}</CoachingProgramButton>
      </CoachingProgramHero>

      {/* First Paragraph*/}
      <div className="mb-[3.2rem] text-[1.9rem] leading-[3.2rem]">
        <CustomPortableText value={content.firstParagraph!} />
      </div>

      {/* Phases */}
      <div>
        <CoachingProgramPhases phases={content.phases!} />
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
          <CoachingProgramFaqs faqs={content.faqs!} />
        </div>
        {/* Second Paragraph */}
        <div>
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

export default JobSearchPage;
