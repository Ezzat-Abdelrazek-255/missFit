import React from "react";
import Phase from "./phase";
import { PhaseType } from "@/types";

type PhasesProps = { phases: PhaseType[] };

const Phases = ({ phases }: PhasesProps) => {
  return (
    <ul className="flex flex-col gap-[3.6rem]">
      {phases && phases.map((phase, i) => <Phase key={phase.title} phase={phase} number={i + 1} />)}
    </ul>
  );
};

export default Phases;
