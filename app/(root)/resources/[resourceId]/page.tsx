import React from "react";
import RelatedArticles from "@/components/resources/resource/related-articles";
import ResourceHeroSection from "@/components/resources/resource/resource-hero-section";
import ResourceBreadcrumb from "@/components/resources/shared/resource-breadcrumb";
import CustomPortableText from "@/components/shared/customPortableText";
import { sanityClient } from "@/sanity/lib/client";
import { RESOURCE_QUERY } from "@/sanity/lib/queries";

type ResourcePageProps = {
  params: {
    resourceId: string;
  };
};

const ResourcePage = async ({ params }: ResourcePageProps) => {
  const content = await sanityClient.fetch(RESOURCE_QUERY, {
    resourceId: params.resourceId,
  });

  if (!content) return null;

  return (
    <div className="mt-[var(--header-height)] py-[var(--container-padding-y)] text-black">
      <ResourceBreadcrumb resource={content} />
      <div className="mx-auto max-w-[115rem] py-[var(--container-padding-y)]">
        <div className="mb-[6rem]">
          <ResourceHeroSection resource={content} />
        </div>
        <div className="max-w-[70rem] text-[1.8rem] leading-[4rem]">
          {content.content && <CustomPortableText value={content.content} />}
        </div>
      </div>
      {content.relatedResources && <RelatedArticles resources={content.relatedResources} />}
    </div>
  );
};

export default ResourcePage;
