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
    defineField({
      name: "testimonials",
      title: "Testimonials Section",
      type: "testimonials",
    }),
    defineField({
      name: "programs",
      title: "Programs Section",
      type: "programs",
    }),
    defineField({
      name: "features",
      title: "Features Section",
      type: "features",
    }),
    defineField({
      name: "faqs",
      title: "FAQS Section",
      type: "faqs",
    }),
  ],

  preview: {
    select: {
      title: "hero.title",
    },
  },
});
