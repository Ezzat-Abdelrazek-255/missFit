import { defineField, defineType } from "sanity";

export const programsSchema = defineType({
  name: "programs",
  title: "Programs Section",
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
      name: "programs",
      title: "Programs",
      type: "array",
      of: [{ type: "program" }],
    }),
  ],
});
