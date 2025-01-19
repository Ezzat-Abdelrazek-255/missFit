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
      name: "description",
      title: "Description",
      type: "customPortableText",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "previousPrice",
      title: "Previous Price",
      type: "number",
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "footnote",
      title: "Footnote",
      type: "customPortableText",
    }),
  ],
});
