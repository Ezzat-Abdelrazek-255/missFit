import { defineField, defineType } from "sanity";

export const resourcesSchema = defineType({
  name: "resources",
  title: "Resources",
  type: "document",
  fields: [
    defineField({
      name: "blogs",
      title: "Blogs",
      type: "blogs",
    }),
  ],

  // preview: {
  //   select: {
  //     title: "hero.title",
  //   },
  // },
});
