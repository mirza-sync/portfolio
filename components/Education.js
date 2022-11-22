import userData from "@constants/data";
import React from "react";

export default function Education() {
  return (
    <section id="education" className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-40 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Education
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {/* Education card */}
          {userData.education.map((edu, idx) => (
            <>
              <EducationCard
                key={idx}
                title={edu.title}
                year={edu.year}
                school={edu.school}
                exam={edu.exam}
              />
              {idx === userData.education.length - 1 ? null : (
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

const EducationCard = ({ title, year, school, exam }) => {
  return (
    <div className="education-card border p-5 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <p className="text-gray-400 font-bold dark:text-gray-300">
        {year}
      </p>
      <h1 className="font-semibold text-xl">{title}</h1>
      <p className="text-gray-500 dark:text-gray-300">
        {school}
      </p>
      <p className="font-semibold">{exam}</p>
    </div>
  );
};
