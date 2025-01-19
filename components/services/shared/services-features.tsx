import FeaturesSection from "@/components/shared/features/features-section";
import { Features } from "@/sanity/types";
import React from "react";

type ServicesFeaturesProps = {
  features: Features;
};

const ServicesFeatures = ({ features }: ServicesFeaturesProps) => {
  return <FeaturesSection features={features} />;
};

export default ServicesFeatures;
