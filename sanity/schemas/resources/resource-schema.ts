import { RESOURCES_CATEGORIES } from "@/constants";
import { defineField, defineType } from "sanity";

export const resourceSchema = defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: ["blogs", "guides", "workshops", "templates", "newsletter"],
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: RESOURCES_CATEGORIES,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "customPortableText",
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
      name: "coverImage",
      title: "Cover Image",
      type: "customImage",
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
      type: "number",
    }),
    defineField({
      name: "relatedResources",
      title: "Related Resources",
      type: "array",
      of: [{ type: "reference", to: [{ type: "resource" }] }],
    }),
  ],
});
