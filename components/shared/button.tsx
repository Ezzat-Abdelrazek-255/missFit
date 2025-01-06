import { cn } from "@/utils";
import React, { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full bg-white text-black text-[2rem] sm:w-[13.5rem] sm:h-[4.2rem] md:w-[20rem] md:h-[6.4rem] uppercase w-[21rem] h-[6.4rem] sm:text-[1.2rem] md:text-[2rem] font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
