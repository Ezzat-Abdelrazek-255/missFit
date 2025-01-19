import { defineField, defineType } from "sanity";

export const phasesSchema = defineType({
  name: "phases",
  title: "Phases",
  type: "object",
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "phases",
      title: "Phases",
      type: "array",
      of: [{ type: "phase" }],
    }),
    defineField({
      name: "footnote",
      title: "Footnote",
      type: "customPortableText",
    }),
  ],
});
