import { cn } from "@/utils";
import React from "react";

type SecondaryHeroProps = {
  children: React.ReactNode;
  className?: string;
};

const SecondaryHero = ({ children, className }: SecondaryHeroProps) => {
  return (
    <section
      className={cn(
        "mt-[var(--header-height)] flex h-[calc(100vh-var(--header-height))] flex-col items-start justify-center sm:items-center sm:text-center md:mx-auto md:max-w-[var(--container-max-width)] md:items-start md:text-left",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default SecondaryHero;
