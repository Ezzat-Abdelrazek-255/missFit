import { sanityClient } from "@/sanity/lib/client";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Testimonial from "./testimonial";

const Testimonials = async () => {
  const sanityResponse = await sanityClient.fetch(TESTIMONIALS_QUERY);
  const content = sanityResponse?.testimonials;

  if (!content) return null;

  return (
    <ul className="flex flex-col items-stretch gap-[2rem] overflow-hidden sm:grid sm:grid-flow-col">
      {content.testimonials &&
        content.testimonials.map((testimonial) => (
          <li key={testimonial.name}>
            <Testimonial testimonial={testimonial} />
          </li>
        ))}
    </ul>
  );
};

export default Testimonials;
