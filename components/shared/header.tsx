"use client";
import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import Logo from "./logo";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

const Header = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <header className="fixed top-0 z-header hidden w-full justify-between px-[calc(var(--container-padding-x)-6.2rem)] py-[2.4rem] md:flex">
      <div className="flex items-center gap-[15rem]">
        <Logo color={isHomePage ? "white" : "black"} />
        <ul
          className={cn(
            "flex items-center gap-[3.2rem] text-[1.6rem] font-semibold",
            !isHomePage && "text-black",
          )}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button className="h-[4.9rem] w-[14.8rem] rounded-full bg-white text-[2rem] font-semibold uppercase text-black hover:bg-gray-100 sm:h-[4.2rem] sm:w-[13.5rem] sm:text-[1.2rem] md:h-[6.4rem] md:w-[20rem] md:text-[2rem]">
        Get Started
      </Button>
    </header>
  );
};

export default Header;
