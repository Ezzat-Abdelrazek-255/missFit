import { defineType, defineField } from "sanity";

export const clientsSchema = defineType({
  name: "clients",
  title: "Clients",
  type: "object",
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "title",
      type: "string",
    }),
    defineField({
      name: "logos",
      title: "Logos",
      type: "array",
      of: [{ type: "customImage" }],
    }),
  ],
});
