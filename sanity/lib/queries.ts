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
