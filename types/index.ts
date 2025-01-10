import {
  FAQS_QUERYResult,
  FEATURES_QUERYResult,
  PROGRAMS_QUERYResult,
  TESTIMONIALS_QUERYResult,
} from "@/sanity/types";

export type NavItemType = {
  label: string;
  href: string;
};

export type TestimonialType = TESTIMONIALS_QUERYResult extends {
  testimonials: { testimonials: Array<infer U> | null } | null;
} | null
  ? U
  : never;

export type ProgramType = PROGRAMS_QUERYResult extends {
  programs: { programs: Array<infer U> | null } | null;
} | null
  ? U
  : never;

export type FeatureType = FEATURES_QUERYResult extends {
  features: { features: Array<infer U> | null } | null;
} | null
  ? U
  : never;

export type FaqType = FAQS_QUERYResult extends {
  faqs: { faqs: Array<infer U> | null } | null;
} | null
  ? U
  : never;
