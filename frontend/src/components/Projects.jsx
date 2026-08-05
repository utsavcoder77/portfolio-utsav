import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";

import project6 from "../assets/projects/project6.png";
import ProjectGallery from "./PhotoGallery";

function Projects() {
  const PROJECTS = [
    {
      id: 1,
      projectName: "Photography Website",
      img: project1,
      alt: "photography website",
      description: `
• Built a full-stack photography business website  
• Designed responsive UI using React and Tailwind CSS  
• Developed backend using Node.js and Express  
• Integrated PostgreSQL for data management  
• Focused on performance and smooth user experience
      `,
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind"],
      live: "https://www.captureamazingmemories.com",
      github: "https://github.com/utsavcoder77/captureamazingmemories.com_v2",
      featured: true,
    },
    {
      id: 2,
      projectName: "UrMate- your everyday help",
      img: <ProjectGallery />,
      alt: "urmate",
      description: `
  • Successfully launched UrMate, a community task marketplace
  • User can post, delete, update and accept day to day task
  • Real time notification and search features  
        `,
      tech: [
        "React",
        "Tailwind",
        "Node.js",
        "Nest.js",
        "PostgreSQL",
        "web sockets",
        "React query",
      ],
      live: "https://urmate.com.au/",
      github: "https://github.com/utsavcoder77/urmate",
      featured: true,
    },
    {
      id: 3,
      projectName: "Split Cost App",
      img: project2,
      alt: "split cost app",
      description: `
• Built a bill splitting app for roommates  
• Add/remove users dynamically  
• Track and settle expenses easily  
      `,
      tech: ["HTML", "CSS", "JavaScript"],
    },

    {
      id: 4,
      projectName: "Stock Management App",
      img: project6,
      alt: "stock management app",
      description: `
• Built a product listing and search app  
• Implemented search functionality  
      `,
      tech: ["React"],
    },
  ];

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <div
      id="projects"
      className="border-b border-neutral-900 pb-10 w-full max-w-screen-xl flex flex-col gap-16"
    >
      {/* Heading */}
      <h1 className="bg-gradient-to-r from-cyan-400 via-orange-500 to-green-500 bg-clip-text text-5xl text-transparent font-bold">
        Projects
      </h1>

      {/* ⭐ Featured Project */}
      {featuredProjects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col md:flex-row gap-8 bg-black p-6 rounded-2xl border border-yellow-500"
        >
          {/* 👇 FIX: Handle image OR gallery */}
          <div className="w-full md:w-1/2">
            {typeof project.img === "string" ? (
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            ) : (
              project.img
            )}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-yellow-400">
              {project.projectName}
            </h2>

            <p className="text-gray-300 whitespace-pre-line">
              {project.description}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-gray-800 px-2 py-1 text-xs rounded">
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  className="text-green-400"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="text-blue-400"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* Other Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {otherProjects.map(
          ({ id, projectName, img, description, alt, tech }) => (
            <div
              key={id}
              className="bg-black p-4 rounded-2xl flex flex-col gap-4 hover:scale-105 transition"
            >
              <h2 className="text-lg font-semibold text-sky-400">
                {projectName}
              </h2>

              <img
                src={img}
                alt={alt}
                className="h-[200px] object-cover rounded-lg"
              />

              <p className="text-sm text-gray-300 whitespace-pre-line">
                {description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2">
                {tech?.map((t, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-2 py-1 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
