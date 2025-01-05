import { cn } from "@/utils";
import React, { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full bg-white text-black text-[2rem] uppercase w-[21rem] h-[6.4rem] font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
