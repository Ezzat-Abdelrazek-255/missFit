import Link from "next/link";
import React from "react";
import Logo from "./logo";
import LinkedinIcon from "@/public/icons/linkedin.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-gray-300 py-[calc(var(--container-padding-y)*2)] text-[1.6rem] leading-[2rem] text-black sm:py-[var(--container-padding-y)] md:py-0 md:pt-[var(--container-padding-y)]">
      <div className="grid grid-cols-1 px-[var(--container-padding-x)] md:grid-cols-[20%_1fr] md:gap-x-[10rem]">
        <div className="mb-[10rem] flex flex-col gap-[2.4rem]">
          <Logo color="pink" />
          <p>The career gym for professionals.</p>
          <div className="flex items-center gap-[2.4rem]">
            <LinkedinIcon />
            <YoutubeIcon className="mt-2" />
          </div>
        </div>
        <div className="mb-[8rem] grid grid-cols-1 grid-rows-3 gap-y-[6rem] sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
          <div>
            <FooterHeading>Company</FooterHeading>
            <FooterList>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Customer Stories</Link>
              </li>
              <li>
                <Link href="#">Sitemap</Link>
              </li>
            </FooterList>
          </div>
          <div>
            <FooterHeading>Resources</FooterHeading>
            <FooterList>
              <li>
                <Link href="#">Guides</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Workbooks</Link>
              </li>
              <li>
                <Link href="#">Templates</Link>
              </li>
            </FooterList>
          </div>
          <div>
            <FooterHeading>Coaching Programs</FooterHeading>
            <FooterList>
              <li>Job Searching Coaching</li>
              <li>Career Coaching</li>
              <li>Executive Coaching</li>
            </FooterList>
          </div>
          <div>
            <FooterHeading>Workshops</FooterHeading>
            <FooterList>
              <li>Linkedin Engine</li>
            </FooterList>
          </div>
          <div>
            <FooterHeading>Services</FooterHeading>
            <FooterList>
              <li>Resume Writing</li>
            </FooterList>
          </div>
          <div>
            <FooterHeading>Newsletter</FooterHeading>
            <div className="flex flex-col gap-[2rem]">
              <p className="max-w-[80%]">
                Join the Insider Edge Newsletter. 45k+ professionals subscribed.
              </p>
              <input
                className="w-full rounded-[0.8rem] border-[1px] border-gray-500 px-[1.6rem] py-[1rem] text-[1.6rem] placeholder:text-gray-500 sm:max-w-none md:max-w-[30rem]"
                placeholder="Enter your email"
                type="text"
              />
              <button className="h-[4.2rem] w-[11rem] rounded-full bg-black text-[1.6rem] font-medium leading-[2.2rem] text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="w-full max-w-[36rem] justify-self-center text-center sm:max-w-none sm:justify-self-start md:flex md:gap-[5rem] md:border-t-[1px] md:border-t-gray-300 md:px-[var(--container-padding-x)] md:py-[3.6rem]">
        ©️ 2024 MissFit Coaching. All rights reserved
        <Link href="#" className="md:underline">
          <span className="md:hidden"> • </span>
          Terms of Use
        </Link>
        <span className="md:hidden"> • </span>
        <Link href="#" className="md:underline">
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
};

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-[2rem] font-semibold">{children}</h2>;
}

function FooterList({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-col gap-[2rem]">{children}</ul>;
}

export default Footer;
