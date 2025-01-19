import React from "react";
import { Features } from "@/sanity/types";
import FeaturesSection from "../shared/features/features-section";

type HomeFeatures = {
  features: Features;
};

const HomeFeatures = async ({ features }: HomeFeatures) => {
  return <FeaturesSection features={features} />;
};

export default HomeFeatures;
