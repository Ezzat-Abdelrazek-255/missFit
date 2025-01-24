"use client";

import React, { useState } from "react";
import ResourceCard from "./resource-card";
import SecondaryButton from "@/components/shared/secondary-button";
import { RESOURCES_QUERYResult } from "@/sanity/types";

const MAX_PER_PAGE = 5;

type ResourcesListProps = {
  resources: RESOURCES_QUERYResult;
};

const ResourcesList = ({ resources }: ResourcesListProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ul className="flex flex-col items-center gap-[6rem] py-[var(--container-padding-y)]">
      {resources.slice(0, currentPage * MAX_PER_PAGE).map(resource => (
        <li key={resource.title}>
          <ResourceCard resource={resource} />
        </li>
      ))}
      {MAX_PER_PAGE * currentPage < resources.length && (
        <SecondaryButton onClick={() => setCurrentPage(currentPage => currentPage + 1)}>Load more</SecondaryButton>
      )}
    </ul>
  );
};

export default ResourcesList;
