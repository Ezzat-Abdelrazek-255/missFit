import React from "react";
import ResourcesList from "../shared/resources-list";
import Subtitle from "@/components/shared/subtitle";
import { RESOURCES_QUERYResult } from "@/sanity/types";

type RelatedArticlesProps = {
  resources: RESOURCES_QUERYResult;
};

const RelatedArticles = ({ resources }: RelatedArticlesProps) => {
  return (
    <section className="bg-gray-100 py-[10rem]">
      <Subtitle>Related Articles</Subtitle>
      <ResourcesList resources={resources} />
    </section>
  );
};

export default RelatedArticles;
