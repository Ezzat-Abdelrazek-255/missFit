import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`
*[_type == "home"][0]{
  hero {
    title,
    description,
    cta,
     "desktopImage": {
        "url": desktopImage.asset->url,
        "alt": desktopImage.alt
    },
     "tabletImage": {
        "url": tabletImage.asset->url,
        "alt": tabletImage.alt
    } ,
     "mobileImage": {
        "url": mobileImage.asset->url,
        "alt": mobileImage.alt
    }  
  },
}
`);

export const CLIENTS_QUERY = defineQuery(`
*[_type == "home"][0] {
  clients {
    title,
    logos[] {
      "url": asset->url,
      "alt": alt
    }
  }
}
`);

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "home"][0] {
    testimonials {
      title,
      testimonials[] {
        description,
        name,
        position,
        organization,
        "image": {
          "url": image.asset->url,
          "alt": image.alt
        }
      }
    }
  }
`);

export const PROGRAMS_QUERY = defineQuery(`
*[_type == "home"][0] {
programs {
title,
programs[] {
title,
description,
cta,
"image": {
"url": image.asset->url,
"alt":image.alt
}
}
}
}
`);

export const FEATURES_QUERY = defineQuery(`
*[_type == "home"][0] {
features {
features[] {
title,
description,
benefits[],
cta,
direction,
"image": {
"url": image.asset->url,
"alt":image.alt
}
}
}
}
`);

export const CTA_SECTION_QUERY = defineQuery(`
*[_type == "home"][0]{
ctaSection {

title,
description,
cta,
"image": {
"url":image.asset->url,
"alt":image.alt
}
}
}
`);

export const FAQS_QUERY = defineQuery(`
*[_type == "home"][0] {
faqs {
title,
faqs[] {
question,
answer
}
}
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
