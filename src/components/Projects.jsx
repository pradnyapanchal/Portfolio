// import React from "react";

// const Projects = () => {
//   return (
//     <div
//       name="Projects"
//       className="
//         bg-[#0a0f2c] text-[#ccd6f6]
//         w-full min-h-screen
//          px-6 sm:px-12 md:px-20 lg:px-40

//         flex flex-col  gap-16
//       "
//     >
//       {/* 🔥 Modern Heading */}
//       <div className="flex items-center gap-5 mt-20 ">
//         <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold  tracking-wide  whitespace-nowrap ">
//           / pet projects
//         </h1>
//         <div className="border-t border-[#ccd6f6] w-full sm:w-5/6"></div>{" "}
//       </div>

//       {/* 🔥 Responsive Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {/* Card 1 */}
//         <div className="bg-[#112240] p-6 rounded-xl hover:-translate-y-2  transition duration-300 shadow-lg">
//           <h2 className="text-xl font-semibold mb-3 ">Project One</h2>
//           <p className="text-sm  leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//             magni reiciendis pariatur.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-[#112240] p-6 rounded-xl hover:-translate-y-2 transition duration-300 shadow-lg">
//           <h2 className="text-xl font-semibold mb-3 ">Project Two</h2>
//           <p className="text-sm leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//             magni reiciendis pariatur.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-[#112240] p-6 rounded-xl hover:-translate-y-2 transition duration-300 shadow-lg">
//           <h2 className="text-xl font-semibold mb-3 ">Project Three</h2>
//           <p className="text-sm leading-relaxed">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
//             magni reiciendis pariatur.
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Projects;

// import React, { useEffect, useState } from "react";

// const Projects = () => {
//   const [repos, setRepos] = useState([]);
//   const username = "pradnyapanchal";

//   useEffect(() => {
//     const fetchRepos = async () => {
//       try {
//         const res = await fetch(
//           `https://api.github.com/users/${username}/repos`,
//         );
//         const data = await res.json();

//         const filtered = data
//           .filter((repo) => !repo.fork)
//           .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
//           .slice(0, 6);

//         setRepos(filtered);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchRepos();
//   }, []);

//   const getLanguages = async (repo) => {
//     const res = await fetch(repo.languages_url);
//     const data = await res.json();
//     return Object.keys(data);
//   };

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

//       {/* Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {repos.map((repo) => (
//           <ProjectCard key={repo.id} repo={repo} getLanguages={getLanguages} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProjectCard = ({ repo, getLanguages }) => {
//   const [languages, setLanguages] = useState([]);

//   useEffect(() => {
//     const fetchLang = async () => {
//       const langs = await getLanguages(repo);
//       setLanguages(langs);
//     };
//     fetchLang();
//   }, [repo]);

//   return (
//     <div className="bg-[#112240] p-6 rounded-xl hover:-translate-y-2 transition duration-300 shadow-lg">

//       <div className="flex justify-between">

//       <h2 className="text-xl font-semibold mb-3">{repo.name}</h2>
//       <h1>link</h1>
//       </div>

//       <p className="text-sm leading-relaxed mb-4">
//         {repo.description || "No description available"}
//       </p>

//       {/* <p className="text-sm mb-2">⭐ {repo.stargazers_count}</p> */}

//       {/* 🧠 Languages */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {languages.map((lang, index) => (
//           <span
//             key={index}
//             className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs"
//           >
//             {lang}
//           </span>
//         ))}
//       </div>

//       {/* Links */}
//       <div className="flex gap-4">
//         <a
//           href={repo.html_url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-400 hover:underline text-sm"
//         >
//           GitHub →
//         </a>

//         {repo.homepage && (
//           <a
//             href={repo.homepage}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-green-400 hover:underline text-sm"
//           >
//             Live →
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import React from "react";

// const projectsData = [
//   {
//     id: 1,
//     name: "Netflix Rating App",
//     description:
//       "A full-stack Python + Flask app to rate Netflix movies with custom UI.",
//     image: "/images/netflix.png",
//     github: "https://github.com/yourusername/netflix-rating",
//     live: "https://netflix-rating.vercel.app",
//     tech: ["React", "Flask", "MongoDB"],
//   },
//   {
//     id: 2,
//     name: "Fractal DNA Animation",
//     description:
//       "Interactive glowing fractal DNA animation using p5.js and Canvas.",
//     image: "/images/dna.png",
//     github: "https://github.com/yourusername/dna-fractal",
//     live: "https://dna-fractal.vercel.app",
//     tech: ["JavaScript", "Canvas", "p5.js"],
//   },
//   {
//     id: 3,
//     name: "Blind Navigation App",
//     description: "Voice-controlled navigation system built using MERN stack.",
//     image: "/images/blindapp.png",
//     github: "https://github.com/yourusername/blind-navigation",
//     live: "https://blind-nav.vercel.app",
//     tech: ["React Native", "Node.js", "MongoDB"],
//   },
// ];

// const Projects = () => {
//   return (
//     <div
//       name="Projects"
//       className="bg-[#0a0f2c] text-[#ccd6f6] w-full min-h-screen
//       px-6 sm:px-12 md:px-20 lg:px-40 flex flex-col gap-16"
//     >
//       {/* Heading */}
//       <div className="flex items-center gap-5 mt-20">
//         <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide whitespace-nowrap">
//           / featured projects
//         </h1>
//         <div className="border-t border-[#ccd6f6] w-full"></div>
//       </div>

//       {/* Grid */}
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {projectsData.map((project) => (
//           <div
//             key={project.id}
//             className="bg-[#112240] rounded-xl overflow-hidden
//             hover:-translate-y-2 transition duration-300 shadow-lg"
//           >
//             {/* Image */}
//             <img
//               src={project.image}
//               alt={project.name}
//               className="h-48 w-full object-cover"
//             />

//             <div className="p-6">
//               <h2 className="text-xl font-semibold mb-3">{project.name}</h2>

//               <p className="text-sm leading-relaxed mb-4">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((item, index) => (
//                   <span
//                     key={index}
//                     className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="flex gap-4">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:underline text-sm"
//                 >
//                   GitHub →
//                 </a>

//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-green-400 hover:underline text-sm"
//                 >
//                   Live →
//                 </a>
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

const username = "pradnyapanchal";

const selectedRepos = [
  {
    repoName: "Portfolio",
    image: "/assests/My-portfolio.png",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchSelectedRepos = async () => {
      try {
        const results = await Promise.all(
          selectedRepos.map(async (item) => {
            const res = await fetch(
              `https://api.github.com/repos/${username}/${item.repoName}`,
              {
                headers: {
                  Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                },
              },
            );

            if (!res.ok) {
              console.log("Repo not found:", item.repoName);
              return null;
            }

            const repoData = await res.json();

            const langRes = await fetch(repoData.languages_url, {
              headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
              },
            });

            const languages = langRes.ok ? await langRes.json() : {};

            return {
              ...repoData,
              image: item.image,
              languages: Object.keys(languages),
            };
          }),
        );

        setProjects(results.filter(Boolean));
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
      px-6 sm:px-12 md:px-20 lg:px-40 flex flex-col gap-16"
    >
      {/* Heading */}
      <div className="flex items-center gap-5 mt-20">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide whitespace-nowrap">
          / pet projects
        </h1>
        <div className="border-t border-[#ccd6f6] w-full"></div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">{project.name}</h2>

              <p className="text-sm leading-relaxed mb-4">
                {project.description || "No description available"}
              </p>

              {/* Stars */}
              {/* <p className="text-sm mb-3">⭐ {project.stargazers_count}</p> */}

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
              <div className="flex gap-4">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm"
                >
                  GitHub →
                </a>

                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline text-sm"
                  >
                    Live →
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
