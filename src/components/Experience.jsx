import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Experience = () => {
  return (
    <div
      name="Experience"
      className="   text-[#ccd6f6] w-full  px-6 sm:px-12 md:px-20 lg:px-30 py-20  flex-col items-center min-h-screen 
      my-10"
    >
      <div className="flex items-center gap-3">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold whitespace-nowrap mb-5 md:mb-10">
          / experience
        </h1>
        <div className=" border-t border-[#ccd6f6]  mb-3 w-5/6  md:mb-8"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-15 mt-6">
        <div className=" flex lg:w-2/6  justify-center flex-col items-center ">
          <img
            src="/profile-1.jpg"
            alt="profile"
            className="w-70 h-64 sm:w-72 sm:h-72  lg:w-90 lg:h-90 
                 object-cover object-top 
                 rounded-xl 
            shadow-[0_0_16px_black]
            transition duration-300
            hover:-translate-y-2 mb-10
        "
          />{" "}
          <a
            href="/ineternship_certificate.pdf"
            download
            className="bg-[#0f254d] text-sm shadow-[0_0_4px_black] hover:bg-[#0b3e9d] transition hover:translate-y-0.5 text-white font-bold  leading-relaxed py-2 px-3 w-55 rounded-xl flex justify-center"
          >
            <h1>Internship certificate</h1>
          </a>
        </div>

        <div className=" text-sm lg:w-4/6 sm:text-base lg:text-lg leading-relaxed md:text-sm xl:mt-3 ">
          <p>
            During my internship at{" "}
            <span className="text-[rgb(0,255,195)] font-bold">
              Mira-Bhayandar Municipal Corporation
            </span>{" "}
            under the{" "}
            <span className="text-[rgb(0,255,195)] font-bold">
              Swachh Survekshan national programme
            </span>{" "}
            , I worked on the operational and digital aspects of urban
            sanitation governance. I analyzed solid waste management workflows
            and participated in structured field data collection with the Ward
            Sanitary Inspector to identify sanitation vulnerability points based
            on official evaluation metrics.
          </p>

          <p className="mt-4">
            On the digital front, I managed official communication channels and
            developed awareness campaigns using Canva, Figma, and Adobe Premiere
            Pro. I focused on structured documentation, digital reporting, and
            visual storytelling to enhance public engagement. This experience
            strengthened my skills in process analysis, data-driven assessment,
            stakeholder communication systems, and digital content optimization
            within a government framework.
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Experience;
