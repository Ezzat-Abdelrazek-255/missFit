// USE A DIFFERENT IMAGE FOR MOBILE AND TABALET
import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "@/sanity/lib/client";
import { HERO_QUERY } from "@/sanity/lib/queries";
import Button from "@/components/shared/button";

const HeroSection = async () => {
  const sanityResponse = await sanityClient.fetch(HERO_QUERY);
  const content = sanityResponse?.hero;

  if (!content) return null;

  return (
    <section className="px-[var(--container-padding-x)] min-h-screen grid items-center">
      <div>
        <h1 className="font-display uppercase text-[7.6rem] leading-[8rem] text-shadow text-shadow-sm mb-[2.4rem] md:max-w-[80rem] max-w-[40rem] sm:text-[4.8rem] sm:leading-[5rem] md:text-[10rem] md:leading-[10.5rem]">
          {content.title}
        </h1>
        <div className="text-[2rem] leading-[2.4rem]  text-shadow text-shadow-sm mb-[3.2rem]">
          <PortableText value={content.description!} />
        </div>
        <Button>Get Started</Button>
      </div>
      <div className="absolute inset-0 z-hidden">
        {content.image && (
          <Image
            src={content.image.url!}
            alt={content.image.alt!}
            className="object-cover w-full h-full object-right"
            fill
            unoptimized
          />
        )}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
