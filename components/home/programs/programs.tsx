import { sanityClient } from "@/sanity/lib/client";
import { PROGRAMS_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Program from "./program";

const Programs = async () => {
  const sanityResponse = await sanityClient.fetch(PROGRAMS_QUERY);
  const content = sanityResponse?.programs;

  if (!content) return;

  return (
    <ul className="flex flex-col justify-between gap-[2.2rem] sm:flex-row">
      {content.programs &&
        content.programs.map((program) => (
          <li className="flex-grow" key={program.title}>
            <Program program={program} />
          </li>
        ))}
    </ul>
  );
};

export default Programs;
