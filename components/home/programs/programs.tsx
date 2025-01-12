import React from "react";
import Program from "./program";
import { ProgramType } from "@/types";

type ProgramsProps = {
  programs: ProgramType[];
};

const Programs = ({ programs }: ProgramsProps) => {
  return (
    <ul className="flex flex-col justify-between gap-[2.2rem] sm:flex-row">
      {programs.map((program) => (
        <li className="flex-grow" key={program.title}>
          <Program program={program} />
        </li>
      ))}
    </ul>
  );
};

export default Programs;
