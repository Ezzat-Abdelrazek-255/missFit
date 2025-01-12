import { Button } from "@/components/shared/button";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "@/sanity/lib/client";
import { HERO_QUERY } from "@/sanity/lib/queries";

const MainLockup = async () => {
  const sanityResponse = await sanityClient.fetch(HERO_QUERY);
  const content = sanityResponse?.hero;

  if (!content) return null;
  return (
    <div>
      <h1 className="text-shadow text-shadow-sm mb-[2.4rem] max-w-[40rem] font-display text-[7.6rem] uppercase leading-[8rem] sm:mb-[1.7rem] sm:text-[4.8rem] sm:leading-[5rem] md:mb-[3.4rem] md:max-w-[80rem] md:text-[10rem] md:leading-[10.5rem]">
        {content.title}
      </h1>
      <div className="text-shadow text-shadow-sm mb-[3.2rem] max-w-[25rem] text-[2rem] leading-[2.4rem] sm:mb-[2.4rem] sm:text-[1.3rem] sm:leading-[1.6rem] md:mb-[4.2rem] md:max-w-[60rem] md:text-[2rem] md:leading-[2.4rem]">
        <PortableText value={content.description!} />
      </div>
      <Button className="h-[6.4rem] w-[21rem] rounded-full bg-white text-[2rem] font-semibold uppercase leading-[2.3rem] text-black hover:bg-gray-100 sm:h-[4.1rem] sm:w-[13.5rem] sm:text-[1.2rem] md:h-[6.4rem] md:w-[21rem] md:text-[2rem]">
        Get Started
      </Button>
    </div>
  );
};

export default MainLockup;
