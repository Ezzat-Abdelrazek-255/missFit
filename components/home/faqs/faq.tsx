import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/accordion";
import { PortableText } from "@portabletext/react";
import { FaqType } from "@/types";

type FaqProps = {
  faq: FaqType;
};

const Faq = ({ faq }: FaqProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="py-[3.2rem] text-[1.65rem] font-semibold leading-[1.6rem] text-black sm:py-[2.7rem] sm:text-[1.2rem] md:text-[2rem] md:leading-[2.4rem]">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="pb-[4rem] text-[1.65rem] leading-[2.3rem] text-black sm:text-[1.2rem] sm:leading-[1.7rem] md:text-[2rem] md:leading-[2.8rem]">
          <PortableText value={faq.answer!} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
