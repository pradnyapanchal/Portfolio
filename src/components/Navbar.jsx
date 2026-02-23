import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Experience",
    },
    {
      id: 4,
      link: "Projects",
    },
  ];
  return (
    <div className="bg-[#0a0f2c] text-[#ccd6f6] fixed top-0 left-0 flex justify-between items-center px-6 sm:px-10 py-4 w-full h-16 z-50">
      <h1 className="text-lg sm:text-xl font-bold cursor-pointer">
        Pradnya Panchal
      </h1>
      {/* on monile screen it is hidden  */}
      <ul className="hidden md:flex items-center gap-7 font-bold text-sm">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:scale-105"
          >
            <Link to={link} smooth duration={500} offset={-64}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center">
        <div className="hidden md:flex items-center gap-5 text-xl">
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

        <div
          onClick={() => setnav(!nav)}
          className="md:hidden cursor-pointer ml-4 z-50"
        >
          {nav ?
            <FaTimes size={28} />
          : <FaBars size={26} />}
        </div>
      </div>

      {nav && (
        <ul className="fixed top-0 right-0 w-3/5 h-screen flex flex-col justify-center items-center bg-[#0a0f2c]/80 backdrop-blur-md border-l border-[#1f2a55] shadow-xl">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="py-8 text-2xl font-bold transition duration-300 hover:text-[#a0b3f1]"
            >
              <Link
                to={link}
                smooth
                duration={300}
                onClick={() => setnav(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
