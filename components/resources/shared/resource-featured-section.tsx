import React from "react";
import SecondaryButton from "@/components/shared/secondary-button";
import { sanityClient } from "@/sanity/lib/client";
import { FEATURED_RESOURCE_QUERY } from "@/sanity/lib/queries";
import { ArrowRight } from "lucide-react";

type ResourceFeaturedSectionProps = {
  type: string;
};

const ResourceFeaturedSection = async ({ type }: ResourceFeaturedSectionProps) => {
  const content = await sanityClient.fetch(FEATURED_RESOURCE_QUERY, { resourceType: type });
  const featuredResource = content?.featuredResource;

  return (
    <section className="grid grid-cols-2 gap-[6.8rem] px-[var(--container-padding-x)] py-[var(--container-padding-y)] text-marine">
      <div>
        <p className="mb-[2rem] text-[2rem] font-semibold uppercase">Featured</p>
        {featuredResource?.title && (
          <h2 className="mb-[6rem] font-display text-[5rem] font-bold leading-[100%]">{featuredResource.title}</h2>
        )}
        <SecondaryButton className="md:w-[19rem]">
          Read Article <ArrowRight />
        </SecondaryButton>
      </div>
      <div className="h-[40rem] w-[67rem] bg-gray-100"></div>
    </section>
  );
};

export default ResourceFeaturedSection;
