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
        flex flex-col justify-start mt-10
      "
    >
      {/* HEADING */}
      <div className="flex items-center gap-4 sm:gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap">
          / about me
        </h1>

        <div className="border-t border-[#ccd6f6] w-1/2 sm:w-2/6"></div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-10">
        {/* LEFT TEXT */}
        <div className="md:w-3/5 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          <p>Lorem ipsum dolor sit amet consectetur adip
            Lorem ipsum dolor sit amet,{" "}
            <span className="font-bold">Software Engineer</span> consectetur
            adipisicing elit. Officiis reprehenderit ipsa dolore optio vero
            ipsam totam libero culpa. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Vel, maxime! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Mollitia distinctio blanditiis
            incidunt ullam. Mollitia, veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus possimus architecto facilis, tenetur deleniti nobis dolorem fugiat, quis recusandae ad aliquam non. Unde nemo veritatis laboriosam placeat hic, cupiditate nulla.
          </p>

          <p className="mt-6">
            Here are some technologies I have been working with:
          </p>

          <ul className="mt-4 grid grid-cols-2 gap-y-3 gap-x-8">
            {["python", "mern", "html", "java", "js", "tailwind css"].map(
              (skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <MdPlayArrow className="text-[rgb(0,255,195)]" />
                  {skill}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* RIGHT IMAGE */}

        
        <img
          className="
            w-56 h-56
            sm:w-64 sm:h-64
            md:w-72 md:h-72
            lg:w-80 lg:h-80
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
