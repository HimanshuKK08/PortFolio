import React from 'react'
import { motion } from "framer-motion";
import Projects from "./Projects";

const AllProjects = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back Navigation */}
      <div className="fixed top-4 left-6 z-50">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 rounded-lg text-sm text-white transition-colors backdrop-blur-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>
      </div>

      {/* Header */}
      <div className="pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A curated collection of projects showcasing my skills in full-stack development, 
            system programming, and modern web technologies.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <Projects isFullPage={true} />

      {/* Project Statistics */}
      {/* <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-6 py-16 mt-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors">
            <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
            <p className="text-neutral-400">Total Projects</p>
          </div>
          <div className="bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors">
            <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
            <p className="text-neutral-400">Featured Works</p>
          </div>
          <div className="bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-xl p-6 text-center hover:border-blue-500/30 transition-colors">
            <div className="text-3xl font-bold text-blue-400 mb-2">8+</div>
            <p className="text-neutral-400">Technologies</p>
          </div>
        </div>
      </motion.div> */}

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <p className="text-neutral-400 mb-6">Interested in collaborating or discussing these projects?</p>
        <button
          onClick={onBack}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 border border-blue-500/50 hover:border-blue-400"
        >
          Get in Touch
        </button>
      </motion.div>

      {/* Spacer for footer */}
      <div className="h-20"></div>
    </div>
  );
};

export default AllProjects;
