import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import myFace from "../../public/img/profile-picture.jpeg";

type Props = {};

function index({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="top-24 absolute uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative mt-[150px] md:mt-0"
      >
        <Image
          src={myFace}
          className="
      mb-10 
      md:mb-0 
      flex-shrink-0 
      w-36 h-36 
      rounded-full
      object-cover 
      md:rounded-lg 
      md-w-64 
      md:h-96 
      xl:w-[550px] 
      xl:h-[350px]
      "
          alt=""
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#0074CC]/50">little</span>{" "}
          background
        </h4>

        <p className="text-1xl">
          Hi, I&apos;m Chidinma Afogu, a results-driven Java developer with a
          strong background in computer systems engineering.
          <br />
          <br />
          With some years of hands-on experience, I excel in designing and
          implementing innovative backend solutions. Skilled in Java,
          SpringBoot, Git, Hibernate, RESTFUL APIs and more.
          <br />
          <br />
          I&apos;m passionate about delivering high-quality, scalable
          applications. Let&apos;s build something amazing together!
        </p>
      </div>
    </motion.div>
  );
}

export default index;
