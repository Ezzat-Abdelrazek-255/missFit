import React from "react";
import Link from "next/link";
import CustomPortableText from "@/components/shared/customPortableText";
import { RESOURCES_QUERYResult } from "@/sanity/types";

type ResourceCardProps = {
  resource: RESOURCES_QUERYResult[0];
};

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const href = `/resources/${resource._id}`;
  const formattedDate = new Date(resource.publishDate!).toLocaleDateString("en-US", {
    month: "long", // Full month name (e.g., "November")
    day: "numeric", // Day of the month (e.g., "30")
    year: "numeric", // Full year (e.g., "2024")
  });

  return (
    <Link
      href={href}
      className="inline-block w-[96.6rem] max-w-[96.6rem] border-[1px] border-gray-100 bg-white px-[4.8rem] py-[3.2rem]"
    >
      <article className="grid grid-cols-2 justify-between">
        <div>
          <p className="mb-[0.8rem] flex items-center gap-[0.8rem] text-[1.6rem] font-semibold">
            <span>{formattedDate}</span>|<span>{resource.readDuration} Minutes</span>
          </p>
          <h2 className="mb-[1.6rem] font-display text-[3.2rem] font-bold leading-[120%] text-marine">
            {resource.title}
          </h2>
          <div className="text-[1.6rem]">
            <CustomPortableText value={resource.description!} />
          </div>
        </div>
        <div className="h-[18.8rem] w-[31.8rem] justify-self-end bg-gray-100"></div>
      </article>
    </Link>
  );
};

export default ResourceCard;
