import React from "react";

type CoachingProgramSubtitleProps = {
  children: React.ReactNode;
};

const CoachingProgramSubtitle = ({
  children,
}: CoachingProgramSubtitleProps) => {
  return (
    <h2 className="my-[5rem] text-center font-display text-[3.3rem] font-bold uppercase leading-[4rem] text-marine sm:my-[4rem] sm:text-[3.7rem] sm:leading-[5rem] md:mx-auto md:max-w-[60rem] md:text-[5.4rem] md:leading-[8rem]">
      {children}
    </h2>
  );
};

export default CoachingProgramSubtitle;
