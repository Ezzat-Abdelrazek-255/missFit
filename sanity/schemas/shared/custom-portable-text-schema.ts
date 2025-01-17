import {
  CenterAlignDecorator,
  CenterAlignIcon,
  HighlightDecorator,
  HighlightIcon,
  LeftAlignDecorator,
  LeftAlignIcon,
  RightAlignDecorator,
  RightAlignIcon,
  BulletListDecorator,
  BulletListIcon,
  NumberedListDecorator,
  NumberedListIcon,
} from "@/sanity/components/portable-text";
import { defineType } from "sanity";

export const customPortableTextSchema = defineType({
  name: "customPortableText",
  title: "Custom Portable Text",
  type: "array",
  of: [
    {
      type: "block",
      lists: [],
      marks: {
        decorators: [
          {
            title: "Bold",
            value: "strong", // Default Sanity bold decorator
          },
          {
            title: "Italic",
            value: "em", // Default Sanity italic decorator
          },
          {
            title: "Highlight",
            value: "highlight",
            icon: HighlightIcon,
            component: HighlightDecorator,
          },
          {
            title: "Left Align",
            value: "left",
            icon: LeftAlignIcon,
            component: LeftAlignDecorator,
          },
          {
            title: "Center Align",
            value: "center",
            icon: CenterAlignIcon,
            component: CenterAlignDecorator,
          },
          {
            title: "Right Align",
            value: "right",
            icon: RightAlignIcon,
            component: RightAlignDecorator,
          },
          {
            title: "Bullet List",
            value: "bullet",
            icon: BulletListIcon,
            component: BulletListDecorator,
          },
          {
            title: "Numbered List",
            value: "number",
            icon: NumberedListIcon,
            component: NumberedListDecorator,
          },
        ],
      },
    },
  ],
});
