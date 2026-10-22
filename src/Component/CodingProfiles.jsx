import React from 'react';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTrophy, FaCheckCircle, FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { LuTrendingUp, LuFlame, LuAward } from "react-icons/lu";

const platforms = [
  {
    id: "leetcode",
    name: "LeetCode",
    username: "himanshu_kk_21",
    url: "https://leetcode.com/u/himanshu_kk_21/",
    rating: "1650",
    solved: "450+",
    rank: "Contest Rating",
    icon: SiLeetcode,
    brandColor: "#FFA116",
    accentGlow: "from-amber-500/20 via-orange-500/10 to-transparent",
    hoverBorder: "group-hover:border-amber-500/50",
    badge: "Top Tier Problem Solver",
    highlights: ["Data Structures", "Dynamic Programming", "Graphs"],
  },
  {
    id: "codechef",
    name: "CodeChef",
    username: "himanshukk",
    url: "https://www.codechef.com/users/himanshukk",
    rating: "1462",
    solved: "150+",
    rank: "2★ Coder",
    icon: SiCodechef,
    brandColor: "#D97706",
    accentGlow: "from-yellow-600/20 via-amber-700/10 to-transparent",
    hoverBorder: "group-hover:border-amber-600/50",
    badge: "Contest Competitor",
    highlights: ["Speed Optimization", "Number Theory", "Greedy Algorithms"],
  },
  {
    id: "codeforces",
    name: "Codeforces",
    username: "HimanshuKK",
    url: "https://codeforces.com/profile/HimanshuKK",
    rating: "1118",
    solved: "100+",
    rank: "Pupil",
    icon: SiCodeforces,
    brandColor: "#38BDF8",
    accentGlow: "from-sky-500/20 via-blue-600/10 to-transparent",
    hoverBorder: "group-hover:border-sky-500/50",
    badge: "Div. 2 / Div. 3 Contestant",
    highlights: ["Math & Constructive", "Binary Search", "Implementation"],
  },
];

const CodingProfiles = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="coding-profiles" className="w-full max-w-6xl mx-auto px-6 py-20 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <FaTrophy className="w-3.5 h-3.5" />
          <span>Competitive Programming</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Problem Solving & Coding Profiles
        </h2>
        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Demonstrated analytical thinking and algorithm design with hundreds of algorithmic challenges solved in live contests and practice.
        </p>
      </motion.div>

      {/* Summary Highlight Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
      >
        <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-white mb-1">700+</div>
          <div className="text-xs text-neutral-400 flex items-center justify-center gap-1">
            <LuFlame className="w-3.5 h-3.5 text-amber-400" />
            <span>Total Problems Solved</span>
          </div>
        </div>

        <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-amber-400 mb-1">1650</div>
          <div className="text-xs text-neutral-400 flex items-center justify-center gap-1">
            <LuTrendingUp className="w-3.5 h-3.5 text-blue-400" />
            <span>LeetCode Peak Rating</span>
          </div>
        </div>

        <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-blue-400 mb-1">3+</div>
          <div className="text-xs text-neutral-400 flex items-center justify-center gap-1">
            <FaCode className="w-3.5 h-3.5 text-emerald-400" />
            <span>Active Platforms</span>
          </div>
        </div>

        <div className="bg-neutral-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
          <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 mb-1">2★</div>
          <div className="text-xs text-neutral-400 flex items-center justify-center gap-1">
            <LuAward className="w-3.5 h-3.5 text-yellow-400" />
            <span>CodeChef Badge</span>
          </div>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {platforms.map((profile) => {
          const PlatformIcon = profile.icon;

          return (
            <motion.div
              key={profile.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`group relative bg-linear-to-b from-neutral-900/95 via-neutral-950/95 to-black border border-white/10 ${profile.hoverBorder} rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden`}
            >
              {/* Custom platform ambient glow */}
              <div
                className={`absolute top-0 right-0 w-44 h-44 bg-linear-to-br ${profile.accentGlow} rounded-full blur-3xl opacity-20 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none -z-10`}
              />

              <div>
                {/* Platform Top Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors shadow-inner"
                    >
                      <PlatformIcon
                        className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: profile.brandColor }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                        {profile.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                        <span>@{profile.username}</span>
                        <FaCheckCircle className="w-3 h-3 text-blue-400" />
                      </div>
                    </div>
                  </div>

                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${profile.name} Profile`}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-neutral-400 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-200"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Badge Tag */}
                <div className="mb-5">
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium rounded-full">
                    {profile.badge}
                  </span>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5 p-3.5 rounded-xl bg-neutral-950/70 border border-white/5">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium mb-0.5">
                      {profile.rank}
                    </div>
                    <div className="text-lg font-bold text-white font-mono">
                      {profile.rating}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium mb-0.5">
                      Problems Solved
                    </div>
                    <div className="text-lg font-bold text-emerald-400 font-mono">
                      {profile.solved}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 group/btn"
              >
                <span>View {profile.name} Profile</span>
                <FaExternalLinkAlt className="w-3 h-3 text-neutral-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default CodingProfiles;