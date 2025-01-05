import React from "react";
import Logo from "./logo";

// Modify label based on state

const MobileHeader = () => {
  return (
    <header className="md:hidden fixed top-0 py-[var(--container-padding-y)] px-[var(--container-padding-x)] flex items-center justify-between w-full">
      <Logo />
      <button
        aria-label="Open nav"
        className="flex flex-col gap-[0.8rem] w-[2.6rem]"
      >
        <span className="border-white border-b-[2.5px] w-full"></span>
        <span className="border-white border-b-[2.5px] bg-white w-full"></span>
      </button>
    </header>
  );
};

export default MobileHeader;
