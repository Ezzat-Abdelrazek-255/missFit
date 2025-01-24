import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`
*[_type == "home"][0]{
hero,
clients,
testimonials,
programs,
features,
ctaSection,
faqs
}
`);

export const JOB_SEARCH_QUERY = defineQuery(`
*[_type == "coachingProgram" && category == "job-search-coaching"][0] {
  title,
  description,
  cta,
  firstParagraph,
  phases,
  "careerCoach": {
    "title": careerCoach.title,
    "coachTitle": careerCoach.coachTitle,
    "coachImage": {
      "url": careerCoach.coachImage.asset->url,
      "alt": careerCoach.coachImage.alt
    },
    "coachStory": careerCoach.coachStory
  },
  guarantees,
  pricingPlans,
  faqs,
  secondParagraph
}
`);

export const CAREER_COACHING_QUERY = defineQuery(`
*[_type == "coachingProgram" && category == "career-coaching"][0] {
  title,
  description,
  cta,
  firstParagraph,
  phases,
  "careerCoach": {
    "title": careerCoach.title,
    "coachTitle": careerCoach.coachTitle,
    "coachImage": {
      "url": careerCoach.coachImage.asset->url,
      "alt": careerCoach.coachImage.alt
    },
    "coachStory": careerCoach.coachStory
  },
  guarantees,
  pricingPlans,
  faqs,
  secondParagraph
}
`);

export const EXECUTIVE_COACHING_QUERY = defineQuery(`
*[_type == "coachingProgram" && category == "executive-coaching"][0] {
  title,
  description,
  cta,
  firstParagraph,
  phases,
  "careerCoach": {
    "title": careerCoach.title,
    "coachTitle": careerCoach.coachTitle,
    "coachImage": {
      "url": careerCoach.coachImage.asset->url,
      "alt": careerCoach.coachImage.alt
    },
    "coachStory": careerCoach.coachStory
  },
  guarantees,
  pricingPlans,
  faqs,
  secondParagraph
}
`);

export const RESUME_WRITING_QUERY = defineQuery(`
*[_type == "service" && category == "resume-writing"][0] {
  title,
  description,
  cta,
  testimonials,
  features,
  phases,
  faqs,
  pricingPlans,
}
`);

export const LINKEDIN_DRILL_QUERY = defineQuery(`
*[_type == "workshop" && category == "linkedin-engine"][0] {
  title,
  description,
  cta,
  testimonials,
  features,
  phases,
  faqs,
  pricingPlans,
}
`);

export const FEATURED_RESOURCE_QUERY = defineQuery(`
*[_type == "resources" && type == $resourceType][0] {
featuredResource->,
}
`);

export const RESOURCES_QUERY = defineQuery(`
  *[_type == "resource" && type == $resourceType] {
_id,
type,
title,
category,
description,
content,
author,
coverImage,
publishDate,
readDuration,
"relatedResources": relatedResources[]->
}
`);

export const RESOURCE_QUERY = defineQuery(`
*[_type == "resource" && _id == $resourceId][0] {
_id,
type,
title,
category,
description,
content,
author,
coverImage,
publishDate,
readDuration,
"relatedResources": relatedResources[]->
}
`);
