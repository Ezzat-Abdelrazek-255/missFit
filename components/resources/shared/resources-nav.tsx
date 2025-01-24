"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RESOURCES_ITEMS } from "@/constants";
import { cn } from "@/utils";

const ResourcesNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="mt-[calc(var(--header-height)+3.2rem)] flex justify-center border-2 border-b-gray-300 border-t-gray-300 text-[1.6rem] text-black">
        {RESOURCES_ITEMS.map(item => (
          <li
            key={item.label}
            className={cn(
              "grid place-content-center px-[2.4rem] py-[1.6rem]",
              pathname === item.href && "border-b-2 border-b-pink text-pink",
            )}
          >
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ResourcesNav;
