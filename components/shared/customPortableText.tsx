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
import CoachingProgramSubtitle from "../coaching-programs/shared/coaching-program-subtitle";
import Link from "next/link";

const portableTextComponents = {
  marks: {
    highlight: HighlightDecorator,
    left: LeftAlignDecorator,
    center: CenterAlignDecorator,
    right: RightAlignDecorator,
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="my-[3rem] inline-block sm:my-[2rem]">
        {children}
      </strong>
    ),
    bullet: BulletListDecorator, // For unordered lists
    number: NumberedListDecorator, // For ordered lists
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value: { href: string };
    }) => (
      <Link href={value.href} className="font-semibold text-pink">
        {children}
      </Link>
    ),
  },
  block: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <CoachingProgramSubtitle>{children}</CoachingProgramSubtitle>
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
