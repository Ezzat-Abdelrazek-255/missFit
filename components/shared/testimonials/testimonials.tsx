"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./testimonial";
import "swiper/css";
import SwiperControls from "@/components/shared/swiper-controls";
import { BREAKPOINTS } from "@/constants";
import { Testimonial as TestimonialType } from "@/sanity/types";

type TestimonialsProps = {
  testimonials: TestimonialType[];
};

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        direction="vertical"
        breakpoints={{
          [BREAKPOINTS["sm"]]: {
            direction: "horizontal",
          },
        }}
        style={{
          position: "static",
        }}
      >
        <SwiperControls />
        <ul className="flex flex-col items-stretch sm:grid sm:grid-flow-col">
          {testimonials.map((testimonial) => (
            <SwiperSlide className="md:!w-[73.4rem]" key={testimonial.name}>
              <li className="sm:cursor-grab">
                <Testimonial testimonial={testimonial} />
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};

export default Testimonials;
