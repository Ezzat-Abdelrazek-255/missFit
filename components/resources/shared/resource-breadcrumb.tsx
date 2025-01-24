import React from "react";
import Link from "next/link";
import { RESOURCE_QUERYResult } from "@/sanity/types";
import { capitalize, kebabToTitleCase } from "@/utils";

type ResourceBreadcrumbProps = {
  resource: RESOURCE_QUERYResult;
};

const ResourceBreadcrumb = ({ resource }: ResourceBreadcrumbProps) => {
  console.log(resource);
  return (
    <div className="border-2 border-b-gray-100 border-t-gray-100 px-[var(--container-padding-x)] py-[1.6rem] text-[1.6rem] font-semibold">
      <div className="mx-auto flex max-w-[115rem] justify-start gap-[1rem]">
        <Link className="text-marine underline" href={`/resources/${resource?.type}`}>
          {resource?.type && capitalize(resource?.type)}
        </Link>
        <span>&gt;</span>
        <Link className="text-marine underline" href={`/resources/${resource?.type}`}>
          {resource?.category && kebabToTitleCase(resource?.category)}
        </Link>
        <span>&gt;</span>
        <span>{resource?.title}</span>
      </div>
    </div>
  );
};

export default ResourceBreadcrumb;
