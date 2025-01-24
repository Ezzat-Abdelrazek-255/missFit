import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/shared/tabs";
import { RESOURCES_CATEGORIES } from "@/constants";

type ResourcesTabsProps = {
  children: React.ReactNode;
};

const RESOURCES_TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Job Search Coaching",
    value: RESOURCES_CATEGORIES[0],
  },
  {
    label: "Career Coaching",
    value: RESOURCES_CATEGORIES[1],
  },
  {
    label: "Executive Coaching",
    value: RESOURCES_CATEGORIES[2],
  },
];

const ResourcesTabs = ({ children }: ResourcesTabsProps) => {
  return (
    <Tabs defaultValue="all">
      <TabsList className="h-full w-full border-b-2 border-t-2 border-gray-300 bg-transparent">
        {RESOURCES_TABS.map(tab => (
          <TabsTrigger
            className="px-[2.4rem] py-[1.6rem] text-[1.6rem] text-black data-[state=active]:bg-transparent data-[state=active]:text-pink data-[state=active]:shadow-none"
            key={tab.value}
            value={tab.value}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

export default ResourcesTabs;
