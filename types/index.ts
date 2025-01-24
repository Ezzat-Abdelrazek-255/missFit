import { FAQS_QUERYResult, FEATURES_QUERYResult, PROGRAMS_QUERYResult, Phase, Testimonial } from "@/sanity/types";

export type TestimonialType = Testimonial;

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

export type PhaseType = Phase;
