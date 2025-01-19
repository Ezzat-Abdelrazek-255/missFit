"use client";

import React from "react";
import Logo from "./logo";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

const MobileHeader = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className="fixed top-0 z-header flex h-[var(--header-height)] w-full items-center justify-between px-[var(--container-padding-x)] pt-[calc(var(--container-padding-y))] sm:pt-[calc(var(--container-padding-y)*0.3)] md:hidden">
      <Logo color={isHomePage ? "white" : "black"} />
      <div className="flex items-center gap-[2rem]">
        <button
          aria-label="Open nav"
          className="flex w-[2.6rem] flex-col gap-[0.8rem]"
        >
          <span
            className={cn(
              "w-full border-b-[2.5px] border-marine",
              isHomePage && "border-white",
            )}
          ></span>
          <span
            className={cn(
              "w-full border-b-[2.5px] border-marine",
              isHomePage && "border-white",
            )}
          ></span>
        </button>
        <Button className="hidden h-[2.9rem] w-[8.8rem] rounded-full bg-white text-[1rem] font-semibold uppercase leading-[1.1rem] text-black hover:bg-gray-100 sm:inline-block md:h-[6.4rem] md:w-[20rem] md:text-[2rem]">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default MobileHeader;
