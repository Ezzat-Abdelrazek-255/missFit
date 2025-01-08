import { faqSchema } from "./faq-schema";
import { featureSchema } from "./feature-schema";
import { programSchema } from "./program-schema";
import { testimonialSchema } from "./testimonial-schema";
import { ctaSchema } from "./cta-schema";
import { customImage } from "./custom-image-schema";

export const sharedSchemas = [
  ctaSchema,
  customImage,
  testimonialSchema,
  programSchema,
  featureSchema,
  faqSchema,
];
