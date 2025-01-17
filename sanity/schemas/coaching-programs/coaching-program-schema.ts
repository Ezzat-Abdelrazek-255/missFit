import { defineField, defineType } from "sanity";

export const coachingProgramSchema = defineType({
  name: "coachingProgram",
  title: "Coaching Program",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "job-search-coaching",
          "career-search-coaching",
          "executive-coaching",
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "description",
      type: "customPortableText",
    }),
    defineField({
      name: "cta",
      title: "Call To Action",
      type: "cta",
    }),
    defineField({
      name: "firstParagraph",
      title: "First Paragraph",
      type: "customPortableText",
    }),
    defineField({
      name: "phases",
      title: "Phases",
      type: "phases",
    }),
    defineField({
      name: "careerCoach",
      title: "Career Coach",
      type: "careerCoach",
    }),
    defineField({
      name: "guarantees",
      title: "Gurantees",
      type: "guarantees",
    }),
    defineField({
      name: "pricingPlans",
      title: "Pricing Plans",
      type: "pricingPlans",
    }),
    defineField({
      name: "faqs",
      title: "FAQS",
      type: "faqs",
    }),
    defineField({
      name: "secondParagraph",
      title: "Second Paragraph",
      type: "customPortableText",
    }),
  ],
});
