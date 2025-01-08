import { defineField, defineType } from "sanity";

export const faqSchema = defineType({
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
