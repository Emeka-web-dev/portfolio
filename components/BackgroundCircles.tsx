import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
          scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full h-[180px] w-[180px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52" />
      <div className="absolute border border-[#f7ab0a]/40 rounded-full h-[400px] w-[400px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[550px] w-[550px] mt-52" />
      <div className="absolute border border-[#333333] rounded-full h-[700px] w-[700px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
