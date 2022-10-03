import React from "react";
import { motion } from "framer-motion";
import {PageInfo} from "../typings"
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({pageInfo}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{duration: 2}}
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row px-8 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-widest md:tracking-[10px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[380px] xl:mt-12 xl:h-[420px]"
        src={urlFor(pageInfo?.profilePic).url()}
        alt=""
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/40">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
