import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  experiences: Experience[];
};

const Experience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-widest md:tracking-[10px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="flex w-full h-full space-x-5 mb-2 overflow-x-auto p-16 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#f7ab0a]/80">
        {experiences?.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
        
      </div>
    </motion.div>
  );
};

export default Experience;
