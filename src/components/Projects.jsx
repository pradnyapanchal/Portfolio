// import React, { useEffect, useState } from "react";
import { GrHost } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";

// const username = "pradnyapanchal";

// const selectedRepos = [
//   {
//     repoName: "Portfolio",
//     image: "src/assets/My-portfolio.png",
//   },
//   {
//     repoName: "Rail-Sathi-App",
//     image: "src/assets/Rail-Sathi-App.jpg",
//   },{

//   }
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchSelectedRepos = async () => {
//       try {
//         const results = await Promise.all(
//           selectedRepos.map(async (item) => {
//             const res = await fetch(
//               `https://api.github.com/repos/${username}/${item.repoName}`,
//               {
//                 headers: {
//                   Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
//                 },
//               },
//             );
//             if (!res.ok) {
//               console.log("Repo not found:", item.repoName);
//               return null;
//             }
//             const repoData = await res.json();

//             const langRes = await fetch(repoData.languages_url, {
//               headers: {
//                 Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
//               },
//             });

//             const languages = langRes.ok ? await langRes.json() : {};

//             return {
//               ...repoData,
//               image: item.image,
//               languages: Object.keys(languages),
//             };
//           }),
//         );

//         setProjects(results.filter(Boolean));
//       } catch (err) {
//         console.error("Error fetching repos:", err);
//       }
//     };

//     fetchSelectedRepos();
//   }, []);
//   return (
//     <div
//       name="Projects"
//       className="bg-[#0a0f2c] text-[#ccd6f6] w-full min-h-screen
//       px-6 sm:px-12 md:px-20 lg:px-40 flex flex-col gap-16"
//     >
//       {/* Heading */}
//       <div className="flex items-center gap-5 mt-20">
//         <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide whitespace-nowrap">
//           / pet projects
//         </h1>
//         <div className="border-t border-[#ccd6f6] w-full"></div>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-[#112240] rounded-xl overflow-hidden
//             hover:-translate-y-2 transition duration-300 shadow-lg "
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="h-48 w-full p-4 object-cover"
//             />

//             <div className="px-8 pb-6">
//               <h2 className="text-xl font-semibold mb-3">{project.name}</h2>

//               <p className="text-sm leading-relaxed mb-4">
//                 {project.description || "No description available"}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.languages.map((lang, index) => (
//                   <span
//                     key={index}
//                     className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs"
//                   >
//                     {lang}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="flex gap-4">
//                 <a
//                   href={project.html_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:underline text-sm"
//                 >
//                   GitHub →
//                 </a>

//                 {project.homepage && (
//                   <a
//                     href={project.homepage}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-green-400 hover:underline text-sm"
//                   >
//                     Live →
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React, { useEffect, useState } from "react";
// // import portfolioImg from "../assets/My-portfolio.png";
// // import railImg from "../assets/Rail-Sathi-App.jpg";
// const username = "pradnyapanchal";

// const selectedRepos = [
//   {
//     repoName: "Portfolio",
//     image: "My-portfolio.png",
//     live: "https://pradnyapanchal.com",
//   },
//   {
//     repoName: "Rail-Sathi-App",
//     image: "Rail-Sathi-App.jpg",
//     live: "https://rail-sathi-app.vercel.app",
//   },
// ];

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchSelectedRepos = async () => {
//       try {
//         // Use Promise.allSettled
//         const results = await Promise.allSettled(
//           selectedRepos.map(async (item) => {
//             const res = await fetch(
//               `https://api.github.com/repos/${username}/${item.repoName}`,
//               {
//                 headers: {
//                   Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
//                 },
//               },
//             );

//             if (!res.ok) {
//               console.log("Repo not found:", item.repoName);
//               throw new Error("Repo not found"); // this will be caught by allSettled
//             }

//             const repoData = await res.json();

//             const langRes = await fetch(repoData.languages_url, {
//               headers: {
//                 Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
//               },
//             });

//             const languages = langRes.ok ? await langRes.json() : {};

//             return {
//               ...repoData,
//               image: item.image,
//               live: item.live,

//               languages: Object.keys(languages),
//             };
//           }),
//         );

//         // Only keep fulfilled results
//         const fulfilledProjects = results
//           .filter((r) => r.status === "fulfilled")
//           .map((r) => r.value);

//         setProjects(fulfilledProjects);
//       } catch (err) {
//         console.error("Error fetching repos:", err);
//       }
//     };

//     fetchSelectedRepos();
//   }, []);

//   return (
//     <div
//       name="Projects"
//       className="bg-[#0a0f2c] text-[#ccd6f6] w-full
//     min-h-screen

//       max-w-7xl px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col justify-center mx-auto gap-16 p-10"
//     >
//       {/* Heading */}
//       <div className="flex items-center gap-5">
//         <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide whitespace-nowrap">
//           / pet projects
//         </h1>
//         <div className="border-t border-[#ccd6f6] w-full"></div>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-[#112240] rounded-xl overflow-hidden
//             hover:-translate-y-2 transition duration-300 shadow-lg "
//           >
//             <img
//               src={project.image}
//               alt={project.name}
//               className="h-48 w-full p-4 object-cover"
//             />

//             <div className="px-8 pb-6">
//               <h2 className="text-xl font-semibold mb-3">{project.name}</h2>

//               <p className="text-sm leading-relaxed mb-4">
//                 {project.description || "No description available"}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.languages.map((lang, index) => (
//                   <span
//                     key={index}
//                     className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs"
//                   >
//                     {lang}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="flex justify-between items-center">
//                 <a
//                   href={project.html_url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:underline text-base flex items-center gap-2"
//                 >
//                   GitHub →{/* <VscGithub size={20} /> */}
//                 </a>

//                 {project.live && (
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:underline text-base flex gap-2"
//                   >
//                     Live →{/* <GrHost size={20} /> */}
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React, { useEffect, useState } from "react";
import { GrHost } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";

// import images
import portfolioImg from "../assets/My-portfolio.png";
import railImg from "../assets/Rail-Sathi-App.jpg";

const username = "pradnyapanchal";

const selectedRepos = [
  {
    repoName: "Portfolio",
    image: portfolioImg,
    live: "https://pradnyapanchal.com",
  },
  {
    repoName: "Rail-Sathi-App",
    image: railImg,
    live: "https://rail-sathi-app.vercel.app",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchSelectedRepos = async () => {
      try {
        const results = await Promise.allSettled(
          selectedRepos.map(async (item) => {
            const res = await fetch(
              `https://api.github.com/repos/${username}/${item.repoName}`,
            );

            if (!res.ok) {
              console.log("Repo not found:", item.repoName);
              throw new Error("Repo not found");
            }

            const repoData = await res.json();

            const langRes = await fetch(repoData.languages_url);
            const languages = langRes.ok ? await langRes.json() : {};

            return {
              ...repoData,
              image: item.image,
              live: item.live,
              languages: Object.keys(languages),
            };
          }),
        );

        const fulfilledProjects = results
          .filter((r) => r.status === "fulfilled")
          .map((r) => r.value);

        setProjects(fulfilledProjects);
      } catch (err) {
        console.error("Error fetching repos:", err);
      }
    };

    fetchSelectedRepos();
  }, []);

  return (
    <div
      name="Projects"
      className="bg-[#0a0f2c] text-[#ccd6f6] w-full min-h-screen
      max-w-7xl px-6 sm:px-12 md:px-16 lg:px-20
      flex flex-col justify-center mx-auto gap-16 p-10"
    >
      {/* Heading */}
      <div className="flex items-center gap-5">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide whitespace-nowrap">
          / pet projects
        </h1>
        <div className="border-t border-[#ccd6f6] w-full"></div>
      </div>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#112240] rounded-xl overflow-hidden
            hover:-translate-y-2 transition duration-300 shadow-lg"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="h-48 w-full p-4 object-cover"
            />

            <div className="px-8 pb-6">
              {/* Title */}
              <h2 className="text-xl font-semibold mb-3">{project.name}</h2>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-4">
                {project.description || "No description available"}
              </p>

              {/* Languages */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between items-center">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-base flex items-center gap-2"
                >
                  GitHub <VscGithub size={18} />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline text-base flex items-center gap-2"
                  >
                    Live <GrHost size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;