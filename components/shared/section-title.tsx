import { cn } from "@/utils";
import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h2
      className={cn(
        "mb-[3rem] font-display text-[3.2rem] font-bold uppercase leading-[6.4rem] text-marine sm:mb-[2.7rem] sm:text-[2.6rem] md:mb-[6.4rem] md:text-[5.4rem]",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
