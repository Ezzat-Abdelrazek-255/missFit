import { defineField, defineType } from "sanity";

export const featureSchema = defineType({
  name: "feature",
  title: "Feature",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
    defineField({
      name: "direction",
      title: "Direction",
      type: "string",
      options: {
        list: ["left-to-right", "right-to-left"],
      },
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "cta",
    }),
  ],
});
