import { defineType, defineField } from "sanity";

export const pricingPlanSchema = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "object",
  fields: [
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      options: {
        list: ["best-value", "most-popular", "most-flexible"],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
