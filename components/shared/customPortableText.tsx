import React from "react";
import { PortableText, PortableTextProps } from "@portabletext/react";
import {
  BulletListDecorator,
  CenterAlignDecorator,
  HighlightDecorator,
  LeftAlignDecorator,
  NumberedListDecorator,
  RightAlignDecorator,
} from "@/sanity/components/portable-text";

const portableTextComponents = {
  marks: {
    highlight: HighlightDecorator,
    left: LeftAlignDecorator,
    center: CenterAlignDecorator,
    right: RightAlignDecorator,
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="my-[3rem] inline-block">{children}</strong>
    ),
    bullet: BulletListDecorator, // For unordered lists
    number: NumberedListDecorator, // For ordered lists
  },
  block: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="my-[3rem] font-display text-[3rem] font-bold uppercase text-marine">
        {children}
      </h2>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="whitespace-pre-line text-[length:inherit] leading-[inherit]">
        {children}
      </p>
    ),
  },
};

const CustomPortableText = (props: PortableTextProps) => {
  return <PortableText {...props} components={portableTextComponents} />;
};

export default CustomPortableText;
