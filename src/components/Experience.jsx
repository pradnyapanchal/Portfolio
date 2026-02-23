import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="   text-[#ccd6f6] w-full px-15 mt-10 sm:px-22  lg:px-40 py-20   flex-col items-center  h-screen"
    >
      <div className="flex items-center gap-6">
        <h1 className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap mb-5 md:mb-10">
          / experience
        </h1>
        <div className=" border-t border-[#ccd6f6]  mb-3 w-4/6  md:mb-8"></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10 ">
        <div className=" text-sm md:text-xl lg:text-xl leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-bold">Software Engineer</span> consectetur
            adipisicing elit. Officiis reprehenderit ipsa dolore optio vero
            ipsam totam libero culpa. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vel, maxime! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia distinctio blanditiis
            incidunt ullam. Mollitia, veritatis?
          </p>

          <p className="mt-6">
            Here are some technologies i have been working with :
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-y-2 gap-x-10 w-full">
            {["python", "mern", "html", "java", "js", "tailwind css"].map(
              (skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <MdPlayArrow />
                  {skill}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default Experience;
