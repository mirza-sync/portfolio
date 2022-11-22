import userData from "@constants/data";
import { isLast } from "@constants/utils";
import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-40 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                details={exp.details}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, details, year, company, companyLink }) => {
  return (
    <div className="experience-card border p-5 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <p className="text-gray-400 font-bold dark:text-gray-200">
        {year}
      </p>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-gray-500 dark:text-gray-300">
        {company}
      </a>
      {details.length > 1 ? (
        details.map((detail, idx) => (
          <div className="mt-2">
            <span className="text-gray-600 dark:text-gray-300 my-2">{detail.desc}</span>
            {detail.link && <a href={detail.link} className="font-medium"> (Project Link)</a>}
            <div className="mt-2">
              <div className="font-semibold">Tech Stack:</div> {
                detail.stack.map((stack, i) => (
                  <span className="text-sm inline-block bg-black-100 dark:bg-gray-900 text-gray-800 dark:text-white shadow rounded-full px-2 py-1 mr-2 mb-1">
                    {stack}
                  </span>
                ))
              }
            </div>
            {!isLast(idx, details) && <hr className="my-3" />}
          </div>
        ))
      ) : (
        details.map((detail, idx) => (
          <div className="mt-2">
            <ul>
              {detail.desc.map((desc, i) => (
                <li className="text-gray-600 dark:text-gray-300 my-0 ml-5 list-disc">{desc}</li>
              ))}
            </ul>
            <div className="mt-3 mr-0">
              <div className="font-semibold">Tech Stack:</div>
              {
                detail.stack.map((stack, i) => (
                  <span className="text-sm inline-block bg-black-100 dark:bg-gray-900 text-gray-800 dark:text-white shadow rounded-full px-2 py-1 mr-2 mb-1">
                    {stack}
                  </span>
                ))
              }
            </div>
          </div>
        ))
      )}
    </div>
  );
};
