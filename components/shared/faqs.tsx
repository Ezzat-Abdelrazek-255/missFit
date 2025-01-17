"use client";

import React, { useState } from "react";
import Faq from "./faq";
import SectionButton from "@/components/shared/section-button";
import { Faq as FaqType } from "@/sanity/types";

type FaqsProps = {
  faqs: FaqType[];
};

const MAX_FAQS = 5;
const Faqs = ({ faqs }: FaqsProps) => {
  const [isFaqsExpanded, setIsFaqsExpanded] = useState(false);

  const handleButtonClick = function() {
    setIsFaqsExpanded((isFaqsExpanded) => !isFaqsExpanded);
  };

  return (
    <div className="flex flex-col items-center">
      <ul className="mb-[6.5rem] flex w-full max-w-[1220px] flex-col">
        {faqs.slice(0, MAX_FAQS).map((faq) => (
          <li key={faq.question}>
            <Faq faq={faq} />
          </li>
        ))}
        {isFaqsExpanded &&
          faqs.slice(MAX_FAQS).map((faq) => (
            <li key={faq.question}>
              <Faq faq={faq} />
            </li>
          ))}
      </ul>

      {faqs.length > MAX_FAQS && (
        <SectionButton onClick={handleButtonClick}>
          {isFaqsExpanded ? "View Less" : "View More"}
        </SectionButton>
      )}
    </div>
  );
};

export default Faqs;
