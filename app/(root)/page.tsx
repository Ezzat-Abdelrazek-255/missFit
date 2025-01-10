import ClientsSection from "@/components/home/clients/clients-section";
import FaqsSection from "@/components/home/faqs/faqs-section";
import FeaturesSection from "@/components/home/features/features-section";
import HeroSection from "@/components/home/hero/hero-section";
import ProgramsSection from "@/components/home/programs/programs-section";
import TestimonialsSection from "@/components/home/testimonials/testimonials-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ClientsSection />
      <TestimonialsSection />
      <ProgramsSection />
      <FeaturesSection />
      <FaqsSection />
    </div>
  );
}
