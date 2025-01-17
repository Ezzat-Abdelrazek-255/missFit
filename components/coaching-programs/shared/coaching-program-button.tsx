import { Button } from "@/components/shared/button";
import React from "react";

type CoachingProgramButtonProps = {
  children: React.ReactNode;
};

const CoachingProgramButton = ({ children }: CoachingProgramButtonProps) => {
  return (
    <Button className="h-[6rem] w-[17.5rem] rounded-full bg-marine text-[1.6rem] font-semibold uppercase leading-[1.9rem] text-white">
      {children}
    </Button>
  );
};

export default CoachingProgramButton;
