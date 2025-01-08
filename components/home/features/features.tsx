import { sanityClient } from "@/sanity/lib/client";
import { FEATURES_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Feature from "./feature";
import { FEATURES_QUERYResult } from "@/sanity/types";

const Features = async () => {
  const sanityResponse =
    await sanityClient.fetch<FEATURES_QUERYResult>(FEATURES_QUERY);
  const content = sanityResponse?.features;

  if (!content) return null;

  return (
    <ul className="flex flex-col gap-[8.4rem]">
      {content.features &&
        content.features.map((feature) => (
          <li key={feature.title}>
            <Feature feature={feature} />
          </li>
        ))}
    </ul>
  );
};

export default Features;
