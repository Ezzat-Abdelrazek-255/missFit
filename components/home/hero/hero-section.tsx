import MainLockup from "./main-lockup";
import HeroImage from "./hero-image";
import { sanityClient } from "@/sanity/lib/client";
import { HERO_QUERY } from "@/sanity/lib/queries";

const HeroSection = async () => {
  const sanityResponse = await sanityClient.fetch(HERO_QUERY);
  const content = sanityResponse?.hero;

  if (!content) return null;

  return (
    <section className="px-[var(--container-padding-x)] min-h-screen grid items-center">
      <MainLockup />
      <HeroImage />
    </section>
  );
};

export default HeroSection;
