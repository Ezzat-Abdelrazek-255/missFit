import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import React from "react";
import Button from "./button";
import Logo from "./logo";

const Header = () => {
  return (
    <header className="fixed top-0 z-header hidden w-full justify-between px-[calc(var(--container-padding-x)-6.2rem)] py-[2.4rem] md:flex">
      <div className="flex items-center gap-[15rem]">
        <Logo />
        <ul className="flex items-center gap-[3.2rem] text-[1.6rem] font-semibold">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Button className="h-[4.9rem] w-[14.8rem]">Get Started</Button>
    </header>
  );
};

export default Header;
