"use client";

import { cn } from "@/utils";
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import ArrowIcon from "@/public/icons/arrow.svg";

type SwiperControlsProps = {
  className?: string;
};

const SwiperControls = ({ className }: SwiperControlsProps) => {
  const swiper = useSwiper();

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    // Update the state when the swiper changes slides
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    swiper.on("reachEnd", function() {
      setIsEnd(true);
    });

    // Cleanup
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div
      className={cn(
        "absolute right-[var(--container-padding-x)] top-[-7.5rem] z-base hidden items-center gap-[1rem] sm:flex md:top-[-12rem] md:gap-[2rem]",
        className,
      )}
    >
      <button
        className="grid aspect-square w-[2.8rem] rotate-180 place-content-center border-2 border-gray-500 text-[1.1rem] transition-colors disabled:border-gray-300 disabled:text-gray-300 md:w-[4.8rem] md:rounded-full md:text-[1.8rem]"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ArrowIcon className="fill-current" />
      </button>
      <button
        className="grid aspect-square w-[2.8rem] place-content-center border-2 border-gray-500 text-[1.1rem] transition-colors disabled:border-gray-300 disabled:text-gray-300 md:w-[4.8rem] md:rounded-full md:text-[1.8rem]"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ArrowIcon className="fill-current" />
      </button>
    </div>
  );
};

export default SwiperControls;
