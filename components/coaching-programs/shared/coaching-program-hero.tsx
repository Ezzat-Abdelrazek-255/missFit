import React from "react";

type CoachingProgramHeroProps = {
  children: React.ReactNode;
};

const CoachingProgramHero = ({ children }: CoachingProgramHeroProps) => {
  return (
    <div className="mt-[var(--mobile-header-height)] flex h-[calc(100vh-var(--mobile-header-height))] flex-col items-start justify-center">
      {children}
    </div>
  );
};

export default CoachingProgramHero;
