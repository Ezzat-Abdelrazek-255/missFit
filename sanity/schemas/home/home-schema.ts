import { defineField, defineType } from "sanity";

export const homeSchema = defineType({
  name: "home",
  title: "Home Page",
  type: "document",

  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "hero",
    }),
  ],

  preview: {
    select: {
      title: "hero.title",
    },
  },
});
