import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-transparent py-4 ">
      {" "}
      <div className="flex items-center justify-center gap-5 sm:gap-6 md:gap-10 pt-4 sm:pt-5 text-2xl">
        <a
          href="https://www.linkedin.com/in/777pradnyapanchal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
        </a>
        <a
          href="https://www.instagram.com/pradnyapanchal_?igsh=MXNsNDBkcnJhMjN0dA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
        </a>

        <a
          href="https://x.com/pradnyapanchal_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
        </a>

        <a
          href="https://github.com/pradnyapanchal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <LuPencilLine className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
        </a>
      </div>
      <div className="text-center text-sm md:text-sm mt-2 sm:pt-3 md:mt-1">
        {" "}
        Built and designed by Pradnya Panchal.{" "}
      </div>
      <div className="text-center text-sm md:text-sm ">
        {" "}
        All rights reserved. ©
      </div>
    </div>
  );
};

export default Footer;
