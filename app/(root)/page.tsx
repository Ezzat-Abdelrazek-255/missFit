import ClientsSection from "@/components/home/clients/clients-section";
import CtaSection from "@/components/home/ctaSection/cta-section";
import HeroSection from "@/components/home/hero/hero-section";
import ProgramsSection from "@/components/home/programs/programs-section";
import FaqsSection from "@/components/shared/faqs-section";
import FeaturesSection from "@/components/shared/features/features-section";
import TestimonialsSection from "@/components/shared/testimonials/testimonials-section";
import { sanityClient } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const content = await sanityClient.fetch(HOME_QUERY);
  if (!content) return null;

  return (
    <main>
      <HeroSection />
      <ClientsSection />
      {content.testimonials && (
        <TestimonialsSection testimonials={content.testimonials} />
      )}
      <ProgramsSection />
      {content.features && <FeaturesSection features={content.features} />}
      <CtaSection />
      {content.faqs && (
        <FaqsSection
          className="py-[var(--container-padding-y)]"
          faqs={content.faqs}
        />
      )}
    </main>
  );
}
