import { defineField, defineType } from "sanity";

export const testimonialsSchema = defineType({
  name: "testimonials",
  title: "Testimonials Section",
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "testimonial" }],
    }),
  ],
});
