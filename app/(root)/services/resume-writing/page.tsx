// TODO Finish the title and finish a solution to pricing
import ServicesFeatures from "@/components/services/shared/services-features";
import ServicesTestimonials from "@/components/services/shared/services-testimonials";
import ServicesTitle from "@/components/services/shared/services-title";
import CustomPortableText from "@/components/shared/customPortableText";
import FaqsSection from "@/components/shared/faqs-section";
import PhasesSection from "@/components/shared/phases-section";
import PricingPlansSection from "@/components/shared/pricing-plans-section";
import SecondaryButton from "@/components/shared/secondary-button";
import SecondaryHero from "@/components/shared/secondary-hero";
import { sanityClient } from "@/sanity/lib/client";
import { RESUME_WRITING_QUERY } from "@/sanity/lib/queries";
import React from "react";

const ResumeWritingPage = async () => {
  const content = await sanityClient.fetch(RESUME_WRITING_QUERY);
  if (!content) return null;

  return (
    <div>
      <SecondaryHero className="px-[var(--container-padding-x)]">
        <div className="mb-[6rem]">
          <ServicesTitle>{content?.title}</ServicesTitle>
        </div>
        <div className="mb-[8rem]">
          <CustomPortableText value={content.description!} />
        </div>
        <SecondaryButton>{content.cta?.label}</SecondaryButton>
      </SecondaryHero>
      {/* Testimonials */}
      <div className="px-[var(--container-padding-x)]">
        <ServicesTestimonials testimonials={content.testimonials!} />
      </div>
      {/* Features */}
      <div>
        <ServicesFeatures features={content.features!} />
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

export default ResumeWritingPage;
