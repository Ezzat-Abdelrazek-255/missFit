import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="hidden md:block">
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
      <button></button>
    </header>
  );
};

export default Header;
