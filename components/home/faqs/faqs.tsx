import { sanityClient } from "@/sanity/lib/client";
import { FAQS_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Faq from "./faq";
import SectionButton from "@/components/shared/section-button";

const Faqs = async () => {
  const sanityResponse = await sanityClient.fetch(FAQS_QUERY);
  const content = sanityResponse?.faqs;

  if (!content) return;
  return (
    <div className="flex flex-col items-center">
      <ul className="mb-[6.5rem] flex w-full max-w-[1220px] flex-col">
        {content.faqs &&
          content.faqs.map((faq) => (
            <li key={faq.question}>
              <Faq faq={faq} />
            </li>
          ))}
      </ul>

      <SectionButton>View More</SectionButton>
    </div>
  );
};

export default Faqs;
