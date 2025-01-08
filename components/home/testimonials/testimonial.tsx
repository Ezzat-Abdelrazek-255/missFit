import React from "react";
import Star from "@/public/icons/star.svg";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { TestimonialType } from "@/types";

const STARS_NUM = 5;

type TestimonialProps = {
  testimonial: TestimonialType;
};

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <article className="grid aspect-auto h-full w-full grid-cols-1 border-2 border-gray-400 md:aspect-[1.6] md:w-[73.4rem] md:grid-cols-2">
      <div className="relative hidden w-full bg-gray-400 md:block">
        {testimonial.image && (
          <Image
            src={testimonial.image.url!}
            alt={testimonial.image.alt!}
            className="h-full w-full object-cover"
            fill
          />
        )}
      </div>
      <div className="flex flex-col justify-between gap-[2.4rem] p-[2.4rem]">
        <div>
          <div className="mb-[2.4rem] flex items-center gap-[0.8rem]">
            {[...new Array(STARS_NUM)].map((_, i) => (
              <Star key={i} />
            ))}
          </div>

          <div className="text-[1.6rem] leading-[2.4rem]">
            <PortableText value={testimonial.description!} />
          </div>
        </div>
        <div className="text-[1.3rem] leading-[2rem]">
          <p>
            <span>{testimonial.name}</span> --{" "}
            <span>{testimonial.position}</span>
          </p>
          <p>{testimonial.organization}</p>
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
