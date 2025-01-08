import { FeatureType } from "@/types";
import { PortableText } from "@portabletext/react";
import Correct from "@/public/icons/correct.svg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/shared/section-title";

type FeatureProps = {
  feature: FeatureType;
};

const Feature = ({ feature }: FeatureProps) => {
  return (
    <article>
      <SectionTitle className="mb-[2rem]">{feature.title}</SectionTitle>
      <div className="mb-[3.2rem] text-[1.6rem]">
        <PortableText value={feature.description!} />
      </div>
      <div className="relative mb-[3.2rem] h-[46rem] w-full">
        <Image
          className="h-full w-full object-cover"
          fill
          src={feature.image.url!}
          alt={feature.image.alt!}
        />
      </div>
      <ul className="mb-[4.8rem] flex flex-col gap-[0.9rem] text-[1.6rem] leading-[2.4rem]">
        {feature.benefits?.map((benefit) => (
          <li key={benefit} className="flex items-center gap-[1rem]">
            <Correct />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Link
        className="rounded-full border-[2px] border-gray-400 px-[2.4rem] py-[1.2rem] text-[1.6rem] font-semibold"
        href={feature.cta?.url || ""}
      >
        {feature.cta?.label}
      </Link>
    </article>
  );
};

export default Feature;
