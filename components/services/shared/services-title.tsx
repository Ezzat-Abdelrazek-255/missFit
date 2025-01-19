import React from "react";

type ServicesTitleProps = {
  children: React.ReactNode;
};

const ServicesTitle = ({ children }: ServicesTitleProps) => {
  return (
    <h1 className="font-display text-[5.4rem] font-bold leading-[5.7rem] text-marine">
      {children}
    </h1>
  );
};

export default ServicesTitle;
