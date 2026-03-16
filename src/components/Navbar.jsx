// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaGithubSquare } from "react-icons/fa";
// import { LuPencilLine } from "react-icons/lu";
// import { FaSquareXTwitter } from "react-icons/fa6";

// const Navbar = () => {
//   const [nav, setnav] = useState(false);

//   const links = [
//     {
//       id: 1,
//       link: "Home",
//     },
//     {
//       id: 2,
//       link: "About",
//     },
//     {
//       id: 3,
//       link: "Experience",
//     },
//     {
//       id: 4,
//       link: "Projects",
//     },
//     {
//       id: 5,
//       link: "Contact",
//     },
//   ];
//   return (
//     <div className="bg-[#0a0f2c] text-[#ccd6f6] fixed top-0 left-0 flex justify-between items-center px-6 sm:px-10 py-4 w-full h-16 z-50">
//       <h1 className="text-lg sm:text-base  lg:text-xl xl:text-2xl  font-bold cursor-pointer">
//         Pradnya Panchal
//       </h1>
//       {/* on mobile screen it is hidden  */}
//       <ul className="hidden md:flex items-center gap-7 xl:text-sm md:text-xs lg:text-sm  px-10  ">
//         {links.map(({ id, link }) => (
//           <li
//             key={id}
//             className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:scale-105"
//           >
//             <Link to={link} smooth duration={500} offset={-64}>
//               {link}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div className="flex items-center">
//         <div className="hidden md:flex items-center md:text-md gap-5 text-2xl">
//           <a
//             href="https://github.com/pradnyapanchal"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaGithubSquare className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
//           </a>

//           <a
//             href="https://www.linkedin.com/in/777pradnyapanchal"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaLinkedin className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
//           </a>
//           <a
//             href="https://www.instagram.com/pradnyapanchal_?igsh=MXNsNDBkcnJhMjN0dA=="
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagramSquare className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
//           </a>

//           <a
//             href="https://x.com/pradnyapanchal_"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaSquareXTwitter className="cursor-pointer transition duration-300 hover:text-[#a0b3f1] hover:-translate-y-1" />
//           </a>

//           <button
//             onClick={() => window.open("/resume.pdf")}
//             className="bg-[#0f254d] text-xs md:text-xs lg:text-xs shadow-[#091120] shadow-md hover:bg-[#0b3e9d] transition hover:translate-y-0.5 text-white   py-2 rounded-xl md:px-2  "
//           >
//             Download Resume
//           </button>
//         </div>

//         <div
//           onClick={() => setnav(!nav)}
//           className="md:hidden cursor-pointer ml-4 z-50"
//         >
//           {nav ?
//             <FaTimes size={28} />
//           : <FaBars size={26} />}
//         </div>
//       </div>

//       {nav && (
//         <ul className="fixed top-0 right-0 w-3/5 h-screen flex flex-col justify-center items-center bg-[#0a0f2c]/80 backdrop-blur-md border-l border-[#1f2a55] shadow-xl cursor-pointer ">
//           {links.map(({ link, id }) => (
//             <li
//               key={id}
//               className="py-8 text-2xl font-bold transition duration-300 hover:text-[#a0b3f1]"
//             >
//               <Link
//                 to={link}
//                 smooth
//                 duration={300}
//                 onClick={() => setnav(false)}
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Experience" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Contact" },
  ];

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  return (
    <div className="bg-[#0a0f2c] text-[#ccd6f6] fixed top-0 left-0 flex justify-between items-center px-6 sm:px-10 py-4 w-full h-16 z-50">
      <h1 className="text-lg sm:text-base lg:text-xl xl:text-2xl font-bold cursor-pointer">
        Pradnya Panchal
      </h1>

      <ul className="hidden md:flex items-center gap-7 xl:text-sm md:text-xs lg:text-sm px-10">
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

      <div className="hidden md:flex items-center gap-5 text-2xl">
        <a
          href="https://github.com/pradnyapanchal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="hover:text-[#a0b3f1] hover:-translate-y-1 transition duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/777pradnyapanchal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-[#a0b3f1] hover:-translate-y-1 transition duration-300" />
        </a>
        <a
          href="https://www.instagram.com/pradnyapanchal_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare className="hover:text-[#a0b3f1] hover:-translate-y-1 transition duration-300" />
        </a>
        <a
          href="https://x.com/@pradnyapanchal_
"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter className="hover:text-[#a0b3f1] hover:-translate-y-1 transition duration-300" />
        </a>
        <a
          href="/resume.pdf"
          download
          className="bg-[#0f254d] text-xs text-center shadow-md hover:bg-[#0b3e9d] transition hover:translate-y-0.5 text-white py-2 px-3 rounded-xl inline-block"
        >
          Download Resume
        </a>{" "}
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer z-100"
      >
        {nav ?
          <FaTimes size={30} />
        : <FaBars size={25} />}
      </div>

      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setNav(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.ul
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-3/5 h-screen  z-50 flex flex-col justify-center items-center shadow-xl bg-[#0a0f2c]/80 backdrop-blur-xs border-l border-[#1f2a55]  cursor-pointer"
            >
              {links.map(({ link, id }) => (
                <li
                  key={id}
                  className="py-8 text-2xl font-bold  hover:text-[#a0b3f1] transition duration-300"
                >
                  <Link
                    to={link}
                    smooth
                    duration={300}
                    onClick={() => setNav(false)}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
