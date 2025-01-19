import MainLockup from "./main-lockup";
import HeroImage from "./hero-image";

const HeroSection = () => {
  return (
    <section className="grid min-h-screen items-center px-[var(--container-padding-x)]">
      <MainLockup />
      <HeroImage />
    </section>
  );
};

export default HeroSection;
