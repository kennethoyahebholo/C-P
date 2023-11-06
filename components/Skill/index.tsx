import React from "react";
import { motion } from "framer-motion";

import Skills from "./Skills";
import JavaLogo from "../../public/img/java.png";
import IntelliJLogo from "../../public/img/intellij.png";
import MysqlLogo from "../../public/img/mysql.png";
import PostgressLogo from "../../public/img/postgresql.png";
import PostmanLogo from "../../public/img/postman.png";
import DockerLogo from "../../public/img/docker.png";
import GitLogo from "../../public/img/git.png";
import GithubLogo from "../../public/img/github.png";
import AwsLogo from "../../public/img/aws.png";

type Props = {};

const codingSkills = [
  {
    id: 1,
    LanguageLogo: JavaLogo,
    percentage: "60%",
  },
  {
    id: 2,
    LanguageLogo: IntelliJLogo,
    percentage: "90%",
  },
  {
    id: 3,
    LanguageLogo: MysqlLogo,
    percentage: "80%",
  },
  {
    id: 4,
    LanguageLogo: PostgressLogo,
    percentage: "70%",
  },
  {
    id: 5,
    LanguageLogo: PostmanLogo,
    percentage: "80%",
  },
  {
    id: 6,
    LanguageLogo: DockerLogo,
    percentage: "50%",
  },
  {
    id: 7,
    LanguageLogo: GithubLogo,
    percentage: "60%",
  },
  {
    id: 8,
    LanguageLogo: GitLogo,
    percentage: "60%",
  },
  {
    id: 9,
    LanguageLogo: AwsLogo,
    percentage: "40%",
  },
];
const index = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative  flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl-px-6 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over or click a skill for current proficiency
      </h3>

      <div className="grid grid-cols-2 xl:grid-cols-7 gap-4 mt-[250px] ">
        {codingSkills.map((skill) => (
          <Skills key={skill.id} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default index;
