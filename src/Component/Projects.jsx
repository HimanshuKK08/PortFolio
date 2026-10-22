import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLock } from "react-icons/fa";
import { ExternalLink, Sparkles, Code2, ArrowUpRight } from "lucide-react";
import projectsData from "../data/projects.json";

const categories = ["All", "Systems & Full-Stack", "Full Stack", "Cybersecurity / AI", "System Programming"];

const Projects = ({ isFullPage = false, onViewMore = null }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Determine projects to display
  const baseProjects = isFullPage ? projectsData : projectsData.slice(0, 4);

  const filteredProjects = activeCategory === "All"
    ? baseProjects
    : baseProjects.filter(p => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-6 py-20 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>Technical Portfolio</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {isFullPage ? 'Complete Project Directory' : 'Featured Engineering Projects'}
        </h2>
        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Production-grade applications, custom system engines, and distributed architectures built with performance and clean code.
        </p>
      </motion.div>

      {/* Category Filter Pills (When on full page or multiple projects) */}
      {isFullPage && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-400/30"
                  : "bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-linear-to-b from-neutral-900/95 via-neutral-950/95 to-black border border-white/10 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                {/* Media Header */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-neutral-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    {project.category && (
                      <span className="bg-neutral-950/85 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1 rounded-full border border-white/15 shadow-md">
                        {project.category}
                      </span>
                    )}

                    {project.featured && (
                      <span className="bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-blue-400/30">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-7">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-400 transition-colors leading-tight">
                    {project.title}
                  </h3>

                  {/* Punchy Overview Description */}
                  <p className="text-neutral-300 text-xs md:text-sm leading-relaxed mb-4">
                    {project.shortDescription || project.description}
                  </p>

                  {/* Architecture & Engineering Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-5 p-3.5 rounded-xl bg-neutral-950/70 border border-white/5 space-y-2">
                      <div className="text-[10px] uppercase tracking-wider text-blue-400 font-bold">
                        Key Engineering Highlights
                      </div>
                      <div className="space-y-1.5">
                        {project.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                            <span className="text-blue-400 font-bold text-sm leading-none mt-0.5">•</span>
                            <span className="leading-snug text-neutral-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-white/5 border border-white/10 text-neutral-300 text-[11px] font-mono rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono rounded-lg">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 md:px-7 md:pb-7 pt-0 flex items-center gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl text-xs font-semibold text-white transition-all duration-200 group/btn"
                  >
                    <FaGithub size={15} />
                    <span>View Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <div className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-900/50 border border-white/5 rounded-xl text-xs font-medium text-neutral-500 cursor-not-allowed">
                    <FaLock size={12} />
                    <span>Private Repository</span>
                  </div>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20 transition-all duration-200 group/demo"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* View More Projects CTA on homepage */}
      {!isFullPage && projectsData.length > 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <button
            onClick={onViewMore}
            className="group px-8 py-3.5 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore All Projects ({projectsData.length})</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
