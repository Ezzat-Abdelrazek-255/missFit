import { defineField, defineType } from "sanity";

export const blogsSchema = defineType({
  name: "blogs",
  title: "Blogs",
  type: "document",
  fields: [
    defineField({
      name: "featuredBlog",
      title: "Featured Blog",
      type: "reference",
      to: [{ type: "blog" }],
    }),
    defineField({
      name: "blogs",
      title: "Blogs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blog" }] }],
    }),
  ],
});
