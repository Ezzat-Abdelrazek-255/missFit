import { defineField, defineType } from "sanity";

export const programSchema = defineType({
  name: "program",
  title: "Program",
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
      name: "image",
      title: "Image",
      type: "customImage",
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "cta",
    }),
  ],
});
