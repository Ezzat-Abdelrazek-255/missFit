import { defineField, defineType } from "sanity";

export const ctaSectionSchema = defineType({
  name: "ctaSection",
  title: "Call-to-action Section",
  type: "object",
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "cta",
      title: "Call to action",
      type: "cta",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
  ],
});
