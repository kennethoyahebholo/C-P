import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  LanguageLogo?: any;
  percentage?: string;
};

const Skills = ({ directionLeft, LanguageLogo, percentage }: Props) => {
  return (
    <div className="group relative items-center justify-center flex cursor-pointer">
      <motion.div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="relative"
      >
        <div className="flex items-center justify-center rounded-full border border-gray-500 w-[70px] h-[70px] md:h-[90px] md:w-[90px] xl:w-[100px] xl:h-[100px] filter group-hover:grayscale transition duration-300 ease-in-out">
          <Image
            src={LanguageLogo}
            alt=""
            className="w-[48px] h-[48px] md:h-[60px] md:w-[60px] xl:w-[70px] xl:h-[70px]"
          />
        </div>
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-[100px] h-[100px] xl:w-[100px] xl:h-[100px] rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {percentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
