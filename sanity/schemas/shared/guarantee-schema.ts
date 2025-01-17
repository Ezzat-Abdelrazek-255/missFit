import { defineField, defineType } from "sanity";

export const guaranteeSchema = defineType({
  name: "guarantee",
  title: "Guarantee",
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
  ],
});
