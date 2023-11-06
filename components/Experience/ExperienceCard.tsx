import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  role?: string;
  companyName?: string;
  CompanyLogo?: any;
  started_at?: string;
  ended_at?: string;
  summary?: any;
};

const ExperienceCard = ({
  role,
  companyName,
  CompanyLogo,
  started_at,
  ended_at,
  summary,
}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-[220px] md:max-w-[400px] xl:w-[500px] snap-center bg-[#dadada] p-6 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center object-contain justify-center w-[12rem] h-[4rem] bg-slate-500 rounded-[16px]">
          <Image
            className="w-full h-[4rem] rounded-[16px]"
            src={CompanyLogo}
            alt="company_logo"
          />
        </div>
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{role}</h4>
        <p className="font-bold text-1xl mt-1">{companyName}</p>
        <p className="uppercase py-2 text-gray-300">
          {started_at} - {ended_at}
        </p>

        <div className="space-y-4 ml-5 text-sm">
          {summary?.map((list: any, index: any) => (
            <ul key={index + 1} className="list-disc">
              <li>{list}</li>
            </ul>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
