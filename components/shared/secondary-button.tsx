import React, { HTMLAttributes } from "react";
import { Button } from "@/components/shared/button";
import { cn } from "@/utils";

type SecondaryButtonProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

const SecondaryButton = ({ children, className, ...props }: SecondaryButtonProps) => {
  return (
    <Button
      className={cn(
        "h-[6rem] w-[17.5rem] rounded-full bg-marine text-[1.6rem] font-semibold uppercase leading-[1.9rem] text-white sm:h-[4rem] sm:w-[11.5rem] sm:text-[1.2rem] md:h-[5rem] md:w-[16.2rem] md:text-[1.5rem] md:leading-[1.8rem]",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
