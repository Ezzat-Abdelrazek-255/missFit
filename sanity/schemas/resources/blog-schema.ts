import { defineField, defineType } from "sanity";

export const blogSchema = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["job-search-coaching", "career-coaching", "executive-coaching"],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "publishDate",
      title: "Publish Date",
      type: "date",
      options: {
        dateFormat: "MMMM-D-YYYY",
      },
    }),
    defineField({
      name: "readDuration",
      title: "Read Duration",
      type: "number", // Consider using minutes as the unit
    }),
    defineField({
      name: "relatedBlogs",
      title: "Related Blogs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blog" }] }],
    }),
  ],
});
