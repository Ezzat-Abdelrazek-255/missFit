import React from "react";
import SecondaryButton from "@/components/shared/secondary-button";
import { RESOURCES_QUERYResult } from "@/sanity/types";

type ResourceHeroSectionProps = {
  resource: RESOURCES_QUERYResult[0];
};

const ResourceHeroSection = ({ resource }: ResourceHeroSectionProps) => {
  const formattedDate = new Date(resource.publishDate!).toLocaleDateString("en-US", {
    month: "long", // Full month name (e.g., "November")
    day: "numeric", // Day of the month (e.g., "30")
    year: "numeric", // Full year (e.g., "2024")
  });

  return (
    <section className="flex items-start gap-[7rem]">
      <div>
        <div className="mb-[6rem] h-[40rem] w-[70rem] bg-gray-100"></div>
        <h1 className="mb-[3.2rem] font-display text-[5rem] font-bold leading-[120%] text-marine">{resource.title}</h1>
        <p className="mb-[1.2rem] text-[2rem]">by {resource.author}</p>
        <p className="mb-[0.8rem] flex items-center gap-[0.8rem] text-[1.6rem]">
          <span>{formattedDate}</span>|<span>{resource.readDuration} Minutes</span>
        </p>
      </div>
      <div>
        <aside className="sticky top-[var(--container-padding-y)] flex w-[38rem] flex-col border-[1px] border-gray-100 px-[3.2rem] py-[4rem]">
          <h2 className="mb-[3.2rem] font-display text-[3.2rem] font-bold uppercase text-marine">
            Join the Insider Edge Newsletter. 45k+ professionals subscribed.
          </h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-[2rem] border-[1px] border-gray-100 px-[2.4rem] py-[2rem] text-[1.4rem] placeholder:text-gray-500"
          />
          <SecondaryButton>Subscribe</SecondaryButton>
        </aside>
      </div>
    </section>
  );
};

export default ResourceHeroSection;
