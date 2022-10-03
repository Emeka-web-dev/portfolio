import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-widest md:tracking-[10px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full overflow-x-auto flex overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 scrollbar-thin">
        {projects?.map((project, id) => (
          <div
            key={id}
            className="w-screen flex-shrink-0 snap-center flex items-center justify-center flex-col space-y-5 p-10 md:px-36 h-[98vh]"
          >
           
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
              className="max-w-[300px] h-auto md:max-w-[500px] object-cover"
            />
            <div className="flex flex-col space-y-4 px-0 lg:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                Project: {id + 1}
                {" of "} {projects.length}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    className="h-8 w-8 rounded-full object-contain"
                  />
                ))}
              </div>
              <p className="text-lg text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[200px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
