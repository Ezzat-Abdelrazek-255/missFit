import React from "react";

type ServicesTitleProps = {
  children: React.ReactNode;
};

const ServicesTitle = ({ children }: ServicesTitleProps) => {
  return (
    <h1 className="mb-[6rem] font-display text-[5.4rem] font-bold leading-[5.7rem] text-marine sm:text-[4.8rem] sm:leading-[5rem] md:mb-[3.6rem] md:text-center md:text-[7.2rem] md:leading-[7.5rem]">
      {children}
    </h1>
  );
};

export default ServicesTitle;
