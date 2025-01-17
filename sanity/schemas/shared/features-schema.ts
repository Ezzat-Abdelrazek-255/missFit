import { defineField, defineType } from "sanity";

export const featuresSchema = defineType({
  name: "features",
  title: "Features",
  type: "object",
  options: {
    collapsed: true,
    collapsible: true,
  },
  fields: [
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "feature" }],
    }),
  ],
});
