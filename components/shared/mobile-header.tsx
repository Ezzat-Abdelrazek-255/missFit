import React from "react";
import Logo from "./logo";
import Button from "./button";

// Modify label based on state

const MobileHeader = () => {
  return (
    <header className="fixed top-0 flex w-full items-center justify-between px-[var(--container-padding-x)] py-[var(--container-padding-y)] md:hidden">
      <Logo />
      <div className="flex items-center gap-[2rem]">
        <button
          aria-label="Open nav"
          className="flex w-[2.6rem] flex-col gap-[0.8rem]"
        >
          <span className="w-full border-b-[2.5px] border-white"></span>
          <span className="w-full border-b-[2.5px] border-white bg-white"></span>
        </button>
        <Button className="hidden sm:inline-block">Get Started</Button>
      </div>
    </header>
  );
};

export default MobileHeader;
