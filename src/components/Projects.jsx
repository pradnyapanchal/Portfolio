import React from "react";

const Projects = () => {
  return (
    <div
      name="Projects"
      className="
        bg-[#0a0f2c] text-[#ccd6f6]
        w-full min-h-screen
         px-6 sm:px-12 md:px-20 lg:px-40
        
        flex flex-col  gap-16
      "
    >
      {/* 🔥 Modern Heading */}
      <div className="flex items-center gap-5 mt-20 ">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold  tracking-wide  whitespace-nowrap ">
          / pet projects
        </h1>
        <div className="border-t border-[#ccd6f6] w-full sm:w-5/6"></div>{" "}
      </div>

      {/* 🔥 Responsive Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#112240] p-6 rounded-xl hover:-translate-y-2 transition duration-300 shadow-lg">
          <h2 className="text-xl font-semibold mb-3 ">Project One</h2>
          <p className="text-sm  leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            magni reiciendis pariatur.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#112240] p-6 rounded-xl hover:-translate-y-2 transition duration-300 shadow-lg">
          <h2 className="text-xl font-semibold mb-3 ">Project Two</h2>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            magni reiciendis pariatur.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#112240] p-6 rounded-xl hover:-translate-y-2 transition duration-300 shadow-lg">
          <h2 className="text-xl font-semibold mb-3 ">Project Three</h2>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            magni reiciendis pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
