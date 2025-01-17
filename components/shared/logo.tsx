import React from "react";
import LogoIcon from "@/public/vectors/logo.svg";
import LogoIconPink from "@/public/vectors/logo-pink.svg";
import { cn } from "@/utils";

type LogoProps = {
  color?: "white" | "pink" | "black";
};

const Logo = ({ color = "white" }: LogoProps) => {
  return (
    <div>
      <div className="flex items-center gap-[1.2rem] text-[3.5rem]">
        {color === "white" && <LogoIcon />}
        {color === "pink" && <LogoIconPink />}
        <p
          className={cn(
            "text-[2.2rem] font-bold uppercase leading-[2rem]",
            color === "black" && "text-black",
          )}
        >
          Missfit
          <br />
          Coaching
        </p>
      </div>
    </div>
  );
};

export default Logo;
