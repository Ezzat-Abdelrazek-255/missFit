import { defineField, defineType } from "sanity";

export const workshopsSchema = defineType({
  name: "workshops",
  title: "Workshops",
  type: "document",
  fields: [
    defineField({
      name: "linkedinEngine",
      title: "Linkedin Engine",
      type: "workshop",
    }),
  ],

  // preview: {
  //   select: {
  //     title: "hero.title",
  //   },
  // },
});
