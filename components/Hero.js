import React from "react";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center overflow-hidden">
      {/* Image container */}
      <div className="w-full md:w-1/2 md:mb-10">
        <div className="w-2/4 md:-rotate-3 mx-auto md:ml-auto">
          <img src={userData.avatarUrl} alt="avatar" className="rounded-lg drop-shadow-xl" />
        </div>
      </div>
      {/* Text container */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:my-10 lg:p-20 lg:pl-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Hi I'm Mirza. A Software Developer
        </h1>
        <h2 className="text-2xl">Frontend | Design | Mobile Apps</h2>
        {/* Icons container */}
        <div className="mt-2 flex justify-center md:justify-start">
          <a href={userData.resumeUrl} target="__blank">
            <button className=" flex flex-row items-center space-x-4 rounded-full bg-white text-gray-900 py-2 px-5 shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download h-4 w-4" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
              <span className="text-lg">Resume</span>{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
