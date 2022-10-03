import React from "react";
import { motion } from "framer-motion";
import {Skill} from "../typings"
import {urlFor} from "../sanity"

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer"
    >
      <img
        src={urlFor(skill?.image).url()}
        className="w-16 h-16 md:w-20 md:h-20 rounded-full filter object-cover bg-transparent group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold text-lg text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
