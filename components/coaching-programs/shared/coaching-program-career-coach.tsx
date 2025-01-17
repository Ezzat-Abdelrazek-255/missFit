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
    <section>
      <p className="text-center">
        <strong>{title}</strong>
      </p>
      <div className="mb-[5rem] mt-[2.4rem]">
        <CoachingProgramSubtitle>{coachTitle}</CoachingProgramSubtitle>
      </div>
      <div className="relative mb-[3rem] h-[50rem] w-full">
        {coachImage && (
          <Image
            src={coachImage.url}
            fill
            className="h-full w-full object-cover"
            alt={coachImage.alt!}
          />
        )}
      </div>
      <div>
        <CustomPortableText value={coachStory!} />
      </div>
    </section>
  );
};

export default CoachingProgramCareerCoach;
