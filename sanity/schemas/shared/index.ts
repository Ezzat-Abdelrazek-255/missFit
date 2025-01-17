import { customPortableTextSchema } from "./custom-portable-text-schema";
import { featuresSchema } from "./features-schema";
import { testimonialsSchema } from "./testimonials-schema";
import { guaranteesSchema } from "./guarantees-schema";
import { phasesSchema } from "./phases-schema";
import { pricingPlansSchema } from "./pricing-plans-schema";
import { faqsSchema } from "./faqs-schema";
import { pricingPlanSchema } from "./pricing-plan-schema";
import { guaranteeSchema } from "./guarantee-schema";
import { phaseSchema } from "./phase-schema";
import { faqSchema } from "./faq-schema";
import { featureSchema } from "./feature-schema";
import { programSchema } from "./program-schema";
import { testimonialSchema } from "./testimonial-schema";
import { ctaSchema } from "./cta-schema";
import { customImage } from "./custom-image-schema";
import { careerCoachSchema } from "./career-coach-schema";

export const sharedSchemas = [
  ctaSchema,
  customImage,
  testimonialSchema,
  programSchema,
  featureSchema,
  faqSchema,
  phaseSchema,
  guaranteeSchema,
  pricingPlanSchema,
  faqsSchema,
  phasesSchema,
  guaranteesSchema,
  pricingPlansSchema,
  careerCoachSchema,
  testimonialsSchema,
  featuresSchema,
  customPortableTextSchema,
];
