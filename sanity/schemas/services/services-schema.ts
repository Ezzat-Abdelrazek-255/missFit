import { defineField, defineType } from "sanity";

export const servicesSchema = defineType({
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "resumeWriting",
      title: "Resume Writing",
      type: "service",
    }),
  ],

  // preview: {
  //   select: {
  //     title: "hero.title",
  //   },
  // },
});
