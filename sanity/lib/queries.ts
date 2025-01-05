import { defineQuery } from "next-sanity";

export const HERO_QUERY = defineQuery(`
*[_type == "home"][0]{
  hero {
    title,
    description,
    cta,
     "image": {
        "url": image.asset->url,
        "alt": image.alt
    }  
  },
}
`);
