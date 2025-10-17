import React from "react";

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-16 px-3 bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4 h-48 w-full object-cover"
            /> */}

            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-indigo-600 font-medium hover:underline"
              target="_blank"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
