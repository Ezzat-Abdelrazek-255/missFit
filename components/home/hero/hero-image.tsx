import Image from "next/image";
import { sanityClient } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/utils";

const HeroImage = async () => {
  const sanityResponse = await sanityClient.fetch(HOME_QUERY);
  const content = sanityResponse?.hero;

  if (!content) return null;

  return (
    <div className="absolute inset-0 z-hidden">
      {content.desktopImage && (
        <Image
          src={urlFor(content.desktopImage).url()}
          alt={content.desktopImage.alt || ""}
          className="hidden h-full w-full object-cover object-right md:inline-block"
          fill
        />
      )}
      {content.tabletImage && (
        <Image
          src={urlFor(content.tabletImage).url()}
          alt={content.tabletImage.alt || ""}
          className="hidden h-full w-full object-cover object-right sm:inline-block md:hidden"
          fill
        />
      )}
      {content.mobileImage && (
        <Image
          src={urlFor(content.mobileImage).url()}
          alt={content.mobileImage.alt || ""}
          className="h-full w-full object-cover object-right sm:hidden"
          fill
        />
      )}
      <div className="absolute inset-0 z-base bg-black opacity-20"></div>
    </div>
  );
};

export default HeroImage;
