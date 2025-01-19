import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import SectionButton from "@/components/shared/section-button";
import { urlFor } from "@/utils";

const CtaSection = async () => {
  const sanityResponse = await sanityClient.fetch(HOME_QUERY);
  const content = sanityResponse?.ctaSection;

  if (!content) return null;

  return (
    <section className="relative grid h-[70rem] items-center justify-center text-center md:justify-start md:text-left">
      <div className="flex flex-col items-center gap-[1.6rem] px-[2rem] md:items-start md:gap-[3.4rem] md:px-[10rem]">
        <h2 className="max-w-[40rem] font-display text-[4.6rem] font-bold uppercase leading-[5.5rem] sm:text-[4.7rem] sm:leading-[5rem] md:max-w-[60rem] md:text-[8rem] md:leading-[8rem]">
          {content.title}
        </h2>
        <div className="text-[1.6rem] sm:max-w-[40rem] sm:text-[1.2rem] sm:leading-[1.8rem] md:max-w-[65rem] md:text-[2rem] md:leading-[2.4rem]">
          <PortableText value={content.description!} />
        </div>
        <SectionButton className="border-none">
          {content.cta?.label}
        </SectionButton>
      </div>
      {content.image && (
        <div className="absolute inset-0 z-hidden">
          <Image
            src={urlFor(content.image).url()}
            alt={content.image.alt || ""}
            fill
            className="h-full w-full object-cover object-left md:object-center"
          />
        </div>
      )}
    </section>
  );
};

export default CtaSection;
