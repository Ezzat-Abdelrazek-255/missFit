import React from "react";
import LogoIcon from "@/public/vectors/logo.svg";
import LogoIconPink from "@/public/vectors/logo-pink.svg";

type LogoProps = {
  color?: "white" | "pink";
};

const Logo = ({ color = "white" }: LogoProps) => {
  return (
    <div>
      <div className="flex items-center gap-[1.2rem] text-[3.5rem]">
        {color === "white" ? <LogoIcon /> : <LogoIconPink />}
        <p className="text-[2.2rem] font-bold uppercase leading-[2rem]">
          Missfit
          <br />
          Coaching
        </p>
      </div>
    </div>
  );
};

export default Logo;
