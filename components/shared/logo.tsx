import React from "react";
import LogoIcon from "@/public/vectors/logo.svg";

const Logo = () => {
  return (
    <div>
      <div className="flex items-center gap-[1.2rem]">
        <LogoIcon />
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
