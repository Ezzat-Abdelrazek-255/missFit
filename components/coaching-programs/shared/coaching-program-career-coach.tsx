import CustomPortableText from "@/components/shared/customPortableText";
import { CareerCoach } from "@/sanity/types";
import Image from "next/image";
import React from "react";
import CoachingProgramSubtitle from "./coaching-program-subtitle";

type CoachingProgramCareerCoachProps = {
  careerCoach: CareerCoach;
};

const CoachingProgramCareerCoach = ({
  careerCoach: { title, coachTitle, coachImage, coachStory },
}: CoachingProgramCareerCoachProps) => {
  return (
    <section className="max-w-[calc(var(--container-max-width)+40rem)] md:mx-auto">
      <p className="text-center">
        <strong>{title}</strong>
      </p>
      <div className="mb-[5rem] mt-[2.4rem]">
        <CoachingProgramSubtitle>{coachTitle}</CoachingProgramSubtitle>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-[6rem]">
        <div className="relative mx-auto mb-[3rem] h-[50rem] w-full max-w-[37.5rem] md:w-[37.5rem]">
          {coachImage && (
            <Image
              src={coachImage.url}
              fill
              className="h-full w-full object-cover"
              alt={coachImage.alt!}
            />
          )}
        </div>
        <div className="sm:mx-auto sm:max-w-[37.5rem] md:mx-0 md:max-w-none">
          <CustomPortableText value={coachStory!} />
        </div>
      </div>
    </section>
  );
};

export default CoachingProgramCareerCoach;
