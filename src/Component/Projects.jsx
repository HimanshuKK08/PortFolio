import React from 'react'
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projectsData from "../data/projects.json";

const Projects = ({ isFullPage = false, onViewMore = null }) => {
  // Show first 4 projects on homepage, all on full page
  const displayedProjects = isFullPage ? projectsData : projectsData.slice(0, 4);

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      > 
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {isFullPage ? 'All Projects' : 'Featured Projects'}
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-neutral-400 text-lg">
          {isFullPage ? 'Complete collection of my work' : 'Recent work and personal projects'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
              {project.featured && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}
              {project.category && (
                <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                  {project.category}
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4 text-justify">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors">
                  <FaGithub size={16} />
                  Code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-white transition-colors">
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!isFullPage && projectsData.length > 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={onViewMore}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 border border-blue-500/50 hover:border-blue-400"
          >
            View More Projects
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
