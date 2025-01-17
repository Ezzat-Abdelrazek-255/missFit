import { defineField, defineType } from "sanity";

export const careerCoachSchema = defineType({
  name: "careerCoach",
  title: "Career Coach",
  type: "object",
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "coachTitle",
      title: "Coach Title",
      type: "string",
    }),
    defineField({
      name: "coachImage",
      title: "Coach Image",
      type: "customImage",
    }),
    defineField({
      name: "coachStory",
      title: "Coach Story",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
