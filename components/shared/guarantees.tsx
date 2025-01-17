import React from "react";
import { Guarantee as GuaranteeType } from "@/sanity/types";
import Guarantee from "./guarantee";

type GuaranteesProps = {
  guarantees: GuaranteeType[];
};

const Guarantees = ({ guarantees }: GuaranteesProps) => {
  return (
    <ul>
      {guarantees &&
        guarantees.map((guarantee, i) => (
          <li key={guarantee.title}>
            <Guarantee number={i + 1} guarantee={guarantee} />
          </li>
        ))}
    </ul>
  );
};

export default Guarantees;
