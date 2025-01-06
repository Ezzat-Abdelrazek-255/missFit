import { defineField, defineType } from "sanity";

export const heroSchema = defineType({
  name: "hero",
  title: "Hero Section",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
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
      name: "cta",
      title: "Call To Action",
      type: "cta",
    }),
    defineField({
      name: "desktopImage",
      title: "Desktop Image",
      type: "customImage",
    }),
    defineField({
      name: "tabletImage",
      title: "Tablet Image",
      type: "customImage",
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile Image",
      type: "customImage",
    }),
  ],
});
