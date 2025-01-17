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
      title: "Clients",
      type: "clients",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "testimonials",
    }),
    defineField({
      name: "programs",
      title: "Programs",
      type: "programs",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "features",
    }),
    defineField({
      name: "ctaSection",
      title: "Call-to-action Section",
      type: "ctaSection",
    }),
    defineField({
      name: "faqs",
      title: "FAQS",
      type: "faqs",
    }),
  ],

  preview: {
    select: {
      title: "hero.title",
    },
  },
});
