import { defineField, defineType } from "sanity";

export const guaranteesSchema = defineType({
  name: "guarantees",
  title: "Guarantees",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "guarantees",
      title: "Guarantees",
      type: "array",
      of: [{ type: "guarantee" }],
    }),
    {
      name: "footnote",
      title: "Footnote",
      type: "customPortableText",
    },
  ],
});
