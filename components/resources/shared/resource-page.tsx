import React from "react";
import ResourceFeaturedSection from "@/components/resources/shared/resource-featured-section";
import ResourcesList from "@/components/resources/shared/resources-list";
import ResourcesTabs from "@/components/resources/shared/resources-tabs";
import { RESOURCES_CATEGORIES } from "@/constants";
import { sanityClient } from "@/sanity/lib/client";
import { RESOURCES_QUERY } from "@/sanity/lib/queries";
import { TabsContent } from "@radix-ui/react-tabs";

type ResourcePageProps = {
  resourceType: "blogs" | "guides" | "workbooks" | "templates" | "newsletter";
};

const ResourcePage = async ({ resourceType }: ResourcePageProps) => {
  const content = await sanityClient.fetch(RESOURCES_QUERY, {
    resourceType: resourceType,
  });
  if (!content) return null;

  return (
    <div>
      <ResourceFeaturedSection type="blogs" />
      <ResourcesTabs>
        <TabsContent value="all">
          <ResourcesList resources={content} />
        </TabsContent>
        {RESOURCES_CATEGORIES.map(category => (
          <TabsContent value={category} key={category}>
            <ResourcesList resources={content.filter(resource => resource.category === category)} />
          </TabsContent>
        ))}
      </ResourcesTabs>
    </div>
  );
};

export default ResourcePage;
