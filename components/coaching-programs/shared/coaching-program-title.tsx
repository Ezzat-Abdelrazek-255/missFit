import React from "react";

type CoachingProgramsProps = {
  children: React.ReactNode;
};

const CoachingProgramTitle = ({ children }: CoachingProgramsProps) => {
  return (
    <h1 className="mb-[2rem] font-display text-[5.4rem] font-bold uppercase leading-[7.5rem] text-marine sm:leading-[7rem] md:mb-[2.8rem] md:text-[7.2rem] md:leading-[7.5rem]">
      {children}
    </h1>
  );
};

export default CoachingProgramTitle;
