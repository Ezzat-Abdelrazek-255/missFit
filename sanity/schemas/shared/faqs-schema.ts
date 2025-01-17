import { defineField, defineType } from "sanity";

export const faqsSchema = defineType({
  name: "faqs",
  title: "FAQS",
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
      name: "faqs",
      title: "FAQS",
      type: "array",
      of: [{ type: "faq" }],
    }),
  ],
});
