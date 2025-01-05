import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { ClassValue } from "clsx";

export const cn = function(...input: ClassValue[]) {
  return twMerge(clsx(input));
};
