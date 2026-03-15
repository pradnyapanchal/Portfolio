import { MdPlayArrow } from "react-icons/md";
import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="
        bg-[#0a0f2c] text-[#ccd6f6]
       max-w-7xl w-full px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col justify-center mx-auto min-h-screen
      "
    >
      <div className="flex items-center gap-3 ">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap ">
          / about me
        </h1>

        <div className="border-t  border-[#ccd6f6] w-5/6 "></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center    lg:items-start  gap-8 mt-8">
        <div className="flex flex-col gap-5  md:w-3/5 text-sm sm:text-base  lg:text-lg leading-relaxed">
          <p>
            I am currently pursuing a part-time
            <span className="font-bold"> Master of Science ( M.Sc.) </span>
            Computer Science at the{" "}
            <span className="text-[rgb(0,255,195)] font-bold">
              {" "}
              University of Mumbai{" "}
            </span>{" "}
            and hold a{" "}
            <span className="font-bold">Bachelor of Science ( B.Sc.)</span>{" "}
            degree in Computer Science from
            <span className="text-[rgb(0,255,195)] font-bold">
              {" "}
              Shankar Narayan College.{" "}
            </span>
            I focus on backend and full-stack web development. I also have
            experience using Git for version control and implementing middleware
            for real-time features. I follow good development practices
            including debugging, testing, writing clean and maintainable code. I
            also have a good understanding of DSA, Object-Oriented Programming,
            and SDLC.
          </p>

          <p>Here are some technologies I have been working with:</p>

          <ul className="grid grid-cols-2 font-medium gap-y-2 gap-x-5">
            {[
              "React",
              "Express",
              "MongoDB",
              "SQL",
              "HTML",
              "Core Java",
              "JS6+",
              "Tailwind CSS",
            ].map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <MdPlayArrow className="text-[rgb(0,255,195)]" />
                {skill}
              </li>
            ))}
          </ul>
          <p>
            Outside of study, I’m nerdy about tech gadgets, love literary
            fiction, and play way too many battle royale games.
          </p>
        </div>

        <img
          className="
            w-70 h-70
            sm:w-90 sm:h-75
            md:w-72 md:h-72
            lg:w-100 lg:h-100
            sm:mb-20
            object-cover
            rounded-lg
            shadow-[0_0_16px_black]
            transition duration-300
            hover:-translate-y-2 
          "
          src="profile.jpeg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default About;
