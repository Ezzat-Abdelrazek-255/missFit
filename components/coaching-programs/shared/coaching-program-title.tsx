import React from "react";

type CoachingProgramsProps = {
  children: React.ReactNode;
};

const CoachingProgramTitle = ({ children }: CoachingProgramsProps) => {
  return (
    <h1 className="mb-[2rem] font-display text-[5.4rem] font-bold uppercase leading-[7.5rem] text-marine">
      {children}
    </h1>
  );
};

export default CoachingProgramTitle;
