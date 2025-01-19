import React from "react";

type ServicesLayoutProps = {
  children: React.ReactNode;
};

const ServicesLayout = ({ children }: ServicesLayoutProps) => {
  return (
    <main className="py-[var(--container-padding-y)] text-[1.6rem] leading-[3.2rem] text-black sm:text-[1.2rem] sm:leading-[2.4rem] md:text-[1.8rem]">
      {children}
    </main>
  );
};

export default ServicesLayout;
