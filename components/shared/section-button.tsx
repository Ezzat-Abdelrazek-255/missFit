import React from "react";
import { cn } from "@/utils";
import { Button, ButtonProps } from "./button";

const SectionButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <Button
      className={cn(
        "grid h-[4.8rem] w-[14.5rem] place-content-center rounded-full border-[2px] border-gray-400 bg-white text-[1.6rem] font-semibold uppercase text-black hover:bg-gray-100 sm:h-[3.5rem] sm:w-[10.5rem] sm:text-[1.1rem] md:h-[4.8rem] md:w-[14.5rem] md:text-[1.6rem]",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SectionButton;
