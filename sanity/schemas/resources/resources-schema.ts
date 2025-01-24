import { defineField, defineType } from "sanity";

export const resourcesSchema = defineType({
  name: "resources",
  title: "Resources",
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
      name: "featuredResource",
      title: "Featured Resource",
      type: "reference",
      to: [{ type: "resource" }],
    }),
  ],
});
