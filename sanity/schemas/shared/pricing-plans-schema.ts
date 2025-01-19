import { defineField, defineType } from "sanity";

export const pricingPlansSchema = defineType({
  name: "pricingPlans",
  title: "Pricing Plans",
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
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "pricingPlans",
      title: "Pricing Plans",
      type: "array",
      of: [{ type: "pricingPlan" }],
    }),
    {
      name: "footnote",
      title: "Footnote",
      type: "customPortableText",
    },
  ],
});
