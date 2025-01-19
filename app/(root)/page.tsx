import ClientsSection from "@/components/home/clients/clients-section";
import CtaSection from "@/components/home/ctaSection/cta-section";
import FaqsSection from "@/components/home/faqs/faqs-section";
import HeroSection from "@/components/home/hero/hero-section";
import HomeFeatures from "@/components/home/home-features";
import HomeTestimonials from "@/components/home/home-testimonials";
import ProgramsSection from "@/components/home/programs/programs-section";
import { sanityClient } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  const content = await sanityClient.fetch(HOME_QUERY);
  if (!content) return null;

  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <HomeTestimonials testimonials={content.testimonials} />
      <ProgramsSection />
      <HomeFeatures features={content.features} />
      <CtaSection />
      <FaqsSection />
    </main>
  );
}
