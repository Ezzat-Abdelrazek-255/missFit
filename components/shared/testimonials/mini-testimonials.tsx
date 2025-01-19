"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "@/components/shared/testimonials/testimonial";
import "swiper/css";
import SwiperControls from "@/components/shared/swiper-controls";
import { BREAKPOINTS } from "@/constants";
import { Testimonial as TestimonialType } from "@/sanity/types";

type MiniTestimonialsProps = {
  testimonials: TestimonialType[];
};

const MiniTestimonials = ({ testimonials }: MiniTestimonialsProps) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        direction="vertical"
        breakpoints={{
          [BREAKPOINTS["sm"]]: {
            direction: "horizontal",
            slidesPerView: 2,
          },
          [BREAKPOINTS["md"]]: {
            direction: "horizontal",
            slidesPerView: 3,
          },
        }}
        style={{
          position: "static",
        }}
      >
        <SwiperControls className="right-0" />
        <ul className="flex flex-col items-stretch sm:grid sm:grid-flow-col">
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <li className="sm:cursor-grab">
                <Testimonial
                  className="md:aspect-auto"
                  testimonial={testimonial}
                />
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};

export default MiniTestimonials;
