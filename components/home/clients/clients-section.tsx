import { sanityClient } from "@/sanity/lib/client";
import React from "react";
import LogosMarquee from "./logos-marquee";
import { HOME_QUERY } from "@/sanity/lib/queries";

const ClientsSection = async () => {
  const sanityResponse = await sanityClient.fetch(HOME_QUERY);
  const content = sanityResponse?.clients;

  if (!content) return null;

  return (
    <div className="w-full overflow-hidden">
      <section className="flex w-[200%] flex-col items-center bg-black py-[5.4rem] sm:py-[4rem] md:w-full md:py-[calc(var(--container-padding-y)-2rem)]">
        <div className="mb-[2rem] w-screen self-start md:self-auto">
          <h2 className="text-center text-[1.8rem] sm:text-[1.3rem] md:text-[2rem]">
            {content.title}
          </h2>
        </div>
        <LogosMarquee logos={content.logos!} />
      </section>
    </div>
  );
};

export default ClientsSection;
