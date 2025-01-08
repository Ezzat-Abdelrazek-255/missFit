import { defineType, defineField } from "sanity";

export const testimonialSchema = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({
      name: "description",
      title: "description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "customImage",
    }),
  ],
});
