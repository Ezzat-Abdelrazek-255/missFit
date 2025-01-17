import React from "react";

type CoachingProgramSubtitleProps = {
  children: React.ReactNode;
};

const CoachingProgramSubtitle = ({
  children,
}: CoachingProgramSubtitleProps) => {
  return (
    <h2 className="my-[5rem] text-center font-display text-[3.3rem] font-bold uppercase leading-[4rem] text-marine">
      {children}
    </h2>
  );
};

export default CoachingProgramSubtitle;
