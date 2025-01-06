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
    defineField({
      name: "clients",
      title: "Clients Section",
      type: "clients",
    }),
  ],

  preview: {
    select: {
      title: "hero.title",
    },
  },
});
