import React from "react";
import Feature from "./feature";
import { Feature as FeatureType } from "@/sanity/types";

type FeaturesProps = {
  features: FeatureType[];
};

const Features = ({ features }: FeaturesProps) => {
  return (
    <ul className="flex flex-col gap-[8.4rem]">
      {features &&
        features.map((feature) => (
          <li key={feature.title}>
            <Feature feature={feature} />
          </li>
        ))}
    </ul>
  );
};

export default Features;
