import { defineField, defineType } from "sanity";

export const phaseSchema = defineType({
  name: "phase",
  title: "Phase",
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
      type: "customPortableText",
    }),
    defineField({
      name: "outcomes",
      title: "Outcomes",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
