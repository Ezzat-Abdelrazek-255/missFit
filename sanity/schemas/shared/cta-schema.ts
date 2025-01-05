import { defineField, defineType } from "sanity";

export const ctaSchema = defineType({
  name: "cta",
  title: "Call To Action",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
});
