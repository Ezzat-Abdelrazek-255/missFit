import { defineField, defineType } from "sanity";

export const customImage = defineType({
  name: "customImage",
  title: "Custom Image",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description:
        "Alternative text for screen readers or if the image cannot load",
    }),
  ],
});
