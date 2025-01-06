import Button from "@/components/shared/button";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "@/sanity/lib/client";
import { HERO_QUERY } from "@/sanity/lib/queries";

const MainLockup = async () => {
  const sanityResponse = await sanityClient.fetch(HERO_QUERY);
  const content = sanityResponse?.hero;

  if (!content) return null;
  return (
    <div>
      <h1 className="font-display uppercase text-[7.6rem] leading-[8rem] text-shadow text-shadow-sm mb-[2.4rem] sm:mb-[1.7rem] md:mb-[3.4rem] md:max-w-[80rem] max-w-[40rem] sm:text-[4.8rem] sm:leading-[5rem] md:text-[10rem] md:leading-[10.5rem]">
        {content.title}
      </h1>
      <div className="text-[2rem] sm:text-[1.3rem] md:text-[2rem] md:max-w-[60rem]  leading-[2.4rem] sm:mb-[2.4rem] md:mb-[4.2rem] max-w-[25rem]  text-shadow text-shadow-sm mb-[3.2rem] md:leading-[2.4rem] sm:leading-[1.6rem]">
        <PortableText value={content.description!} />
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default MainLockup;
