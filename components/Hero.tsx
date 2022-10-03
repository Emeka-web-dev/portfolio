import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({pageInfo}: Props) => {
  const words = [`Hi, The name's ${pageInfo?.name}`, "Welcome to my Space", "I Love to Travel,", "But Love to Code More."];
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="rounded-full h-32 w-32 mx-auto relative object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-widest md:tracking-[10px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold px-6 md:px-8">
          <Typewriter
            options={{
              strings: words,
              autoStart: true,
              loop: true,
              delay: 80,
              cursorClassName: "cursor",
            }}
          />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
