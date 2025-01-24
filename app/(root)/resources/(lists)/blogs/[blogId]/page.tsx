import React from "react";
import RelatedArticles from "@/components/resources/resource/related-articles";
import ResourceHeroSection from "@/components/resources/resource/resource-hero-section";
import CustomPortableText from "@/components/shared/customPortableText";
import { sanityClient } from "@/sanity/lib/client";
import { RESOURCE_QUERY } from "@/sanity/lib/queries";

type BlogPageProps = {
  params: {
    blogId: string;
  };
};

const BlogPage = async ({ params }: BlogPageProps) => {
  const content = await sanityClient.fetch(RESOURCE_QUERY, {
    resourceId: params.blogId,
  });

  if (!content) return null;

  return (
    <div>
      <div className="mx-auto max-w-[115rem] px-[var(--container-padding-x)] py-[var(--container-padding-y)]">
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

export default BlogPage;
