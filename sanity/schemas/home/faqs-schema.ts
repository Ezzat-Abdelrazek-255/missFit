import { defineField, defineType } from "sanity";

export const faqsSchema = defineType({
  name: "faqs",
  title: "FAQS Section",
  type: "object",
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    defineField({
      name: "faqs",
      title: "FAQS",
      type: "array",
      of: [{ type: "faq" }],
    }),
  ],
});
