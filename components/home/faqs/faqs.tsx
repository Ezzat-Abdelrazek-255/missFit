import React from "react";
import Faq from "./faq";
import SectionButton from "@/components/shared/section-button";
import { FaqType } from "@/types";

type FaqsProps = {
  faqs: FaqType[];
};

const Faqs = async ({ faqs }: FaqsProps) => {
  return (
    <div className="flex flex-col items-center">
      <ul className="mb-[6.5rem] flex w-full max-w-[1220px] flex-col">
        {faqs.map((faq) => (
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
