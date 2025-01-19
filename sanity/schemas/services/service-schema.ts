import { defineField, defineType } from "sanity";

export const serviceSchema = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["resume-writing"],
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
