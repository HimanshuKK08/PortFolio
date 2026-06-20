import React from 'react'
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import codingProfilesData from "../data/codingProfiles.json";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";

const iconMap = {
  leetcode: SiLeetcode,
  codeforces: SiCodeforces,
  codechef: SiCodechef,
};

// Optional brand-accurate colors per platform.
// Falls back to the existing blue theme if a platform isn't listed here.
const iconColorMap = {
  leetcode: "#FFA116",
  codeforces: "#1F8ACB",
  codechef: "#5B4638",
};

const CodingProfiles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="coding-profiles" className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Competitive Programming</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
          My presence on competitive programming platforms and coding communities. 
          Passionate about solving algorithmic challenges and continuous improvement.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {codingProfilesData.map((profile) => {
          const PlatformIcon = iconMap[profile.icon];
          const iconColor = iconColorMap[profile.icon];

          return (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              
              <div className="relative bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                {/* Platform Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">
                      {PlatformIcon && (
                        <PlatformIcon
                          className="w-8 h-8"
                          style={{ color: iconColor }}
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{profile.platform}</h3>
                      <p className="text-sm text-blue-400 font-serif">@{profile.username}</p>
                    </div>
                  </div>
                  <FaExternalLinkAlt className="text-neutral-500 group-hover:text-blue-400 transition-colors w-4 h-4" />
                </div>

                {/* Stats Grid */}
                <div className="space-y-3 mb-5">
                  {profile.rating && (
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 text-sm">Rating</span>
                      <span className="text-blue-400 font-semibold">{profile.rating}</span>
                    </div>
                  )}
                  
                  {profile.solved && (
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 text-sm">Problems Solved</span>
                      <span className="text-emerald-400 font-semibold">{profile.solved}</span>
                    </div>
                  )}

                  {profile.badge && (
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-400 text-sm">Badge</span>
                      <span className="text-amber-400 font-semibold text-sm">{profile.badge}</span>
                    </div>
                  )}
                </div>

                {/* Visit Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(profile.url, '_blank');
                  }}
                  className="w-full py-2 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 text-sm font-semibold rounded-lg transition-all duration-300"
                >
                  Visit Profile
                </button>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-blue-600/10 to-transparent rounded-full blur-2xl -z-10"></div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>

      {/* Additional Info Section */}
      
    </section>
  );
};

export default CodingProfiles;