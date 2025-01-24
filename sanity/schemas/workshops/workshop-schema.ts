import { defineField, defineType } from "sanity";

export const workshopSchema = defineType({
  name: "workshop",
  title: "Workshop",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["linkedin-engine"],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "cta",
      title: "Call To Action",
      type: "cta",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "testimonials",
    }),
    defineField({
      name: "features",
      title: "features",
      type: "features",
    }),
    defineField({
      name: "phases",
      title: "Phases",
      type: "phases",
    }),
    defineField({
      name: "faqs",
      title: "FAQS",
      type: "faqs",
    }),
    defineField({
      name: "pricingPlans",
      title: "Pricing Plans",
      type: "pricingPlans",
    }),
  ],
});
