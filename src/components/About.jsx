import { MdPlayArrow } from "react-icons/md";
import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="
        bg-[#0a0f2c] text-[#ccd6f6]
        w-full min-h-screen 
        px-6 sm:px-12 md:px-20 lg:px-40 
        flex flex-col  justify-center 
      "
    >
      <div className="flex items-center gap-3 ">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap ">
          / about me
        </h1>

        <div className="border-t  border-[#ccd6f6] w-5/6 "></div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center  lg:items-start gap-8 mt-8">
        <div className="flex flex-col gap-5  md:w-3/5 text-sm sm:text-base  lg:text-lg leading-relaxed">
          <p>
            I am currently pursuing a part-time
            <span className="font-bold"> Master of Science (M.Sc.)</span>
            Computer Science at the{" "}
            <span className="text-[rgb(0,255,195)] font-bold">
              {" "}
              University of Mumbai{" "}
            </span>{" "}
            and hold a{" "}
            <span className="font-bold">Bachelor of Science (B.Sc.)</span>{" "}
            degree in Computer Science from
            <span className="text-[rgb(0,255,195)] font-bold">
              {" "}
              Shankar Narayan College.{" "}
            </span>
            . consectetur adipisicing elit. Officiis reprehenderit ipsa dolore
            optio vero ipsam totam libero culpa. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Vel, maxime! Lorem, ipsum dolor sit
            Unde nemo veritatis laboriosam placeat hic, cupiditate nulla.
          </p>

          <p>Here are some technologies I have been working with:</p>

          <ul className="grid grid-cols-2 gap-y-2 gap-x-5">
            {[
              "React",
              "Express",
              "MongoDB",
              "SQL",
              "HTML",
              "Java",
              "JS6+",
              "tailwind CSS",
            ].map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <MdPlayArrow className="text-[rgb(0,255,195)]" />
                {skill}
              </li>
            ))}
          </ul>
          <p>
            Outside of study, I’m nerdy about tech gadgets, love literary
            fiction, and play way too many battle royale games. .
          </p>
        </div>

        <img
          className="
            w-70 h-70
            sm:w-75 sm:h-75
            md:w-72 md:h-72
            lg:w-90 lg:h-90
            object-cover
            rounded-lg
            shadow-[0_0_16px_black]
            transition duration-300
            hover:-translate-y-2
          "
          src="https://i.pinimg.com/736x/91/40/81/9140819877f70bcd4d14d7a951c366a5.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default About;
