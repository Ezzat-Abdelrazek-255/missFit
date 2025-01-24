"use client";

import React from "react";
// import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./button";
import Logo from "./logo";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle,
} from "@/components/shared/navigation-menu";
import { NAV_ITEMS } from "@/constants";
import { cn } from "@/utils";

const Header = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <header className="fixed top-0 z-header hidden w-full justify-between px-[calc(var(--container-padding-x)-6.2rem)] py-[2.4rem] md:flex">
      <div className="flex items-center gap-[15rem]">
        <Logo color={isHomePage ? "white" : "black"} />
        <NavigationMenu
          className={cn("flex items-center gap-[3.2rem] text-[1.6rem] font-semibold", !isHomePage && "text-black")}
        >
          <NavigationMenuList>
            {NAV_ITEMS.map(item => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger className="bg-transparent p-[1.6rem] text-[1.6rem] hover:bg-transparent hover:text-white">
                  {item.label}
                </NavigationMenuTrigger>
                {/* <NavigationMenuContent className="p-[3.2rem]"> */}
                {/*   {item.items.map(item => ( */}
                {/*     <Link key={item.label} href={item.href}> */}
                {/*       <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink> */}
                {/*     </Link> */}
                {/*   ))} */}
                {/* </NavigationMenuContent> */}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Button className="h-[4.9rem] w-[14.8rem] rounded-full bg-white text-[2rem] font-semibold uppercase text-black hover:bg-gray-100 sm:h-[4.2rem] sm:w-[13.5rem] sm:text-[1.2rem] md:h-[6.4rem] md:w-[20rem] md:text-[2rem]">
        Get Started
      </Button>
    </header>
  );
};

export default Header;
