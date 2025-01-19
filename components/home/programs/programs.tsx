"use client";

import React from "react";
import Program from "./program";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperControls from "@/components/shared/swiper-controls";
import { BREAKPOINTS } from "@/constants";
import { Program as ProgramType } from "@/sanity/types";

type ProgramsProps = {
  programs: ProgramType[];
};

const Programs = ({ programs }: ProgramsProps) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView="auto"
        direction="vertical"
        spaceBetween={20}
        breakpoints={{
          [BREAKPOINTS["sm"]]: {
            slidesPerView: 2,
            direction: "horizontal",
          },
          [BREAKPOINTS["md"]]: {
            slidesPerView: 3,
            direction: "horizontal",
          },

          [BREAKPOINTS["lg"]]: {
            slidesPerView: 4,
            direction: "horizontal",
          },
        }}
        style={{
          position: "static",
        }}
      >
        <SwiperControls className="right-0" />
        <ul className="flex flex-col justify-between gap-[2.2rem] sm:flex-row">
          {programs.map((program) => (
            <SwiperSlide key={program.title}>
              <li className="flex-grow">
                <Program program={program} />
              </li>
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </div>
  );
};

export default Programs;
