import React from "react";
import ResourcesNav from "@/components/resources/shared/resources-nav";

type ResourcesLayoutProps = {
  children: React.ReactNode;
};

const ResourcesLayout = ({ children }: ResourcesLayoutProps) => {
  return (
    <main className="text-black">
      <ResourcesNav />
      {children}
    </main>
  );
};

export default ResourcesLayout;
