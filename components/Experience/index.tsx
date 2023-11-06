import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "../Experience/ExperienceCard";
import IAcademyLogo from "../../public/img/i_academy.jpeg";
import SideHustleLogo from "../../public/img/sh.jpeg";
import ZuriLogo from "../../public/svg/zuri.svg";
import CodeFirstGirlsLogo from "../../public/img/cfg.jpeg";

type Props = {};

const myExperience = [
  {
    id: 1,
    role: "software developer - java (internship)",
    companyName: "I-ACADEMY",
    CompanyLogo: IAcademyLogo,
    started_at: "March 2023",
    ended_at: "Till Now",
    summary: [
      "Developed REST APIs using Spring boot and Hibernate.",
      "Implemented authentication and authorization using JWT security.",
      "Implemented Two-factor authentication by integrating Termii API.",
      "Implemented payments through card or bank transfer using monnify API.",
      "Conducted code reviews and provided feedback to the other developers to ensure code quality.",
      "Managed deployments and monitored application performance using AWS, Render and Railway.",
    ],
  },
  {
    id: 2,
    role: "HngX internship",
    companyName: "ZURI",
    CompanyLogo: ZuriLogo,
    started_at: "September 2023",
    ended_at: "October 2023",
    summary: [
      "Developed and maintained APIs for the free lunch application, ensuring seamless communication between various modules and components.",
      "Collaborated closely with a team of developers, designers, and mentors, actively participating in the planning and execution phases of the project.",
      "Spearheaded the design and implementation of the organization service module in the free lunch app, enabling efficient management of user data and interactions within the application.",
      "Successfully integrated video uploading functionality, leveraging AWS S3 bucket services to facilitate secure and scalable storage for user-generated content.",
      "Actively participated in regular team meetings, offering valuable insights and suggestions to enhance the overall functionality and user experience of the free lunch app.",
    ],
  },
  {
    id: 3,
    role: "frontend developer",
    companyName: "CODE FIRST GIRLS",
    CompanyLogo: CodeFirstGirlsLogo,
    started_at: "January 2023",
    ended_at: "February 2023",
    summary: [
      "Collaborated with a team to develop a website called 'Narangya'.",
      "Contributed to the creation of various pages on the website using HTML, CSS, and JavaScript.",
      "Gained practical experience in working within a team, managing tasks, and effectively communicating ideas and solutions.",
    ],
  },
  {
    id: 4,
    role: "internship",
    companyName: "SIDE HUSTLE",
    CompanyLogo: SideHustleLogo,
    started_at: "November 2022",
    ended_at: "December 2022",
    summary: [
      "Attained proficiency in the basics of HTML, CSS, and JavaScript, enabling you to create simple web pages and style them effectively.",
      "Acquired hands-on experience in building and designing basic web layouts using HTML and CSS, demonstrating a solid understanding of front-end web development principles.",
      "Demonstrated an ability to implement basic interactivity and dynamic elements on web pages using JavaScript.",
      "Completed a month-long internship program focused on learning the fundamental concepts of web development.",
    ],
  },
];

const index = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-1xl md:text-2xl">
        Experience
      </h3>

      <div
        className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0074CC]/80     

      mt-[95px]
      "
      >
        {myExperience.map((experience) => (
          <ExperienceCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default index;
