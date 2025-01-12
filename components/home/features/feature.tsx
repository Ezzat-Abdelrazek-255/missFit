import { FeatureType } from "@/types";
import { PortableText } from "@portabletext/react";
import Correct from "@/public/icons/correct.svg";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SectionTitle from "@/components/shared/section-title";
import { cn } from "@/utils";
import SectionButton from "@/components/shared/section-button";

type FeatureProps = {
  feature: FeatureType;
};

const Feature = ({ feature }: FeatureProps) => {
  return (
    <div
      className={cn(
        "bg-gray-200",
        feature.direction === "left-to-right" && "bg-white",
      )}
    >
      <article
        className={cn(
          "items-start px-[var(--container-padding-x)] py-[4rem] sm:flex sm:flex-row sm:gap-x-[2.4rem] sm:py-[3rem] md:items-center md:gap-x-[8rem] md:py-[6rem]",
          feature.direction === "left-to-right" &&
          "sm:flex-row-reverse sm:justify-end",
        )}
      >
        <div className="sm:hidden">
          <FeatureText feature={feature} />
        </div>
        <div className="relative mb-[3.2rem] h-[46rem] w-full sm:h-[32.5rem] sm:w-[26rem] md:h-[70.5rem] md:w-[60rem]">
          <Image
            className="h-full w-full object-cover"
            fill
            src={feature.image.url!}
            alt={feature.image.alt!}
          />
        </div>
        <div className="sm:w-1/2">
          <div className="hidden sm:block">
            <FeatureText feature={feature} />
          </div>
          <ul className="mb-[3.2rem] flex flex-col gap-[0.9rem] text-[1.5rem] leading-[2.4rem] sm:mb-[2.54rem] sm:text-[1.1rem] sm:leading-[1.7rem] md:mb-[3.6rem] md:text-[1.7rem]">
            {feature.benefits?.map((benefit) => (
              <li key={benefit} className="flex items-center gap-[1rem]">
                <Correct />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <SectionButton asChild>
            <Link href={feature.cta?.url || ""}>{feature.cta?.label}</Link>
          </SectionButton>
        </div>
      </article>
    </div>
  );
};

const FeatureText = function({ feature }: FeatureProps) {
  return (
    <>
      <SectionTitle className="mb-[2rem] whitespace-nowrap leading-[4rem] sm:leading-[100%] md:col-span-1 md:mb-[2.4rem]">
        {feature.title}
      </SectionTitle>
      <div className="mb-[3.2rem] text-[1.6rem] sm:text-[1.2rem] md:text-[1.8rem]">
        <PortableText value={feature.description!} />
      </div>
    </>
  );
};

export default Feature;
