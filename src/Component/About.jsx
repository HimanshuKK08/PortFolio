import React from 'react';
import { motion } from "framer-motion";
import { TbBrandCpp, TbBrandNodejs, TbSql, TbApi, TbArrowsExchange, TbBinaryTree, TbCpu, TbCube, TbHierarchy } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiPostman, SiPython } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaGitAlt, FaGithub, FaAws, FaDatabase } from "react-icons/fa";
import { GraduationCap, Sparkles, Code2, Server, Briefcase } from "lucide-react";

const fade = (delay) => ({
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
});

const B = ({ children }) => (
  <span className="text-white font-semibold">{children}</span>
);

const skillCategories = [
  {
    title: "Languages",
    description: "Core programming and querying languages",
    accent: "from-blue-500/20 to-cyan-500/20",
    borderHover: "hover:border-blue-500/50",
    skills: [
      { name: "C++", icon: TbBrandCpp, color: "#00599C" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "#F7DF1E" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: TbSql, color: "#00BCF2" },
    ],
  },
  {
    title: "Backend & Web",
    description: "Full-stack web technologies & architectures",
    accent: "from-purple-500/20 to-blue-500/20",
    borderHover: "hover:border-purple-500/50",
    skills: [
      { name: "Node.js", icon: TbBrandNodejs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: TbApi, color: "#38BDF8" },
      { name: "WebSocket", icon: TbArrowsExchange, color: "#A855F7" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "React", icon: RiReactjsFill, color: "#61DAFB" },
    ],
  },
  {
    title: "CS Fundamentals",
    description: "Core computer science and theoretical foundations",
    accent: "from-emerald-500/20 to-teal-500/20",
    borderHover: "hover:border-emerald-500/50",
    skills: [
      { name: "Data Structures & Algorithms", icon: TbBinaryTree, color: "#34D399" },
      { name: "OOP", icon: TbCube, color: "#60A5FA" },
      { name: "Operating Systems", icon: TbCpu, color: "#F472B6" },
      { name: "DBMS", icon: FaDatabase, color: "#FBBF24" },
    ],
  },
  {
    title: "Tools",
    description: "Version control & developer workflow tooling",
    accent: "from-amber-500/20 to-orange-500/20",
    borderHover: "hover:border-amber-500/50",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#E6EDF3" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Others",
    description: "Distributed architectures & cloud infrastructure",
    accent: "from-indigo-500/20 to-pink-500/20",
    borderHover: "hover:border-indigo-500/50",
    skills: [
      { name: "System Design", icon: TbHierarchy, color: "#818CF8" },
      { name: "Cloud Fundamentals (AWS)", icon: FaAws, color: "#FF9900" },
    ],
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 pt-10 pb-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Connected & Animated Story Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative bg-linear-to-br from-neutral-900/95 via-neutral-950/95 to-black border border-white/10 hover:border-blue-500/40 rounded-2xl p-8 md:p-10 shadow-2xl mb-14 transition-all duration-300 overflow-hidden group"
      >
        {/* Ambient atmospheric backdrop */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-blue-500/15 transition-colors duration-500" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-purple-500/15 transition-colors duration-500" />

        {/* Narrative Paragraphs */}
        <div className="space-y-5 text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
          <motion.p {...fade(0.15)}>
            Hey, I’m Himanshu, a <B>Computer Engineering</B> student at VIT Pune,
            and I can’t leave things at “it works.” If something works, I want to
            know <B>why</B> it works, and then what breaks it.
          </motion.p>

          <motion.p {...fade(0.25)}>
            Which is how I end up debugging for an hour just to understand
            something that was never broken. I like <B>edge cases</B>, the “what
            if this fails at 2 AM” questions most people skip.
          </motion.p>

          <motion.p {...fade(0.35)}>
            <B>How I work:</B> I move fast and like owning things end to end.
            I’ve led college project teams, and I’m still learning the hard part
            of leading: slowing down to hear everyone out first. Getting better at
            it. 😄
          </motion.p>

          <motion.p {...fade(0.45)}>
            <B>Off the keyboard:</B> I play chess (decent, not scary) and I’m
            happiest outdoors, somewhere with trees and no Wi-Fi. Chess and
            engineering are the same hobby: think three moves ahead, and expect to
            be surprised.
          </motion.p>

          <motion.p {...fade(0.55)}>
            Right now I’m looking for <B>internships and entry-level roles</B> in{" "}
            <B>backend and systems</B>, with a team that builds real things.
          </motion.p>
        </div>

        {/* Quick facts */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-neutral-400 font-medium">Studying</div>
              <div className="text-sm font-semibold text-white">
                B.Tech Computer Engineering, VIT Pune ’27
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-neutral-400 font-medium">Strongest at</div>
              <div className="text-sm font-semibold text-white">
                C++, DSA & Operating Systems
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-neutral-400 font-medium">Building</div>
              <div className="text-sm font-semibold text-white">
                Backend & real-time systems
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] text-neutral-400 font-medium flex items-center gap-1.5">
                <span>Status</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <div className="text-sm font-semibold text-emerald-400">
                Open to internships & full-time roles
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Elaborated Skills Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Technical Skills & Expertise</h3>
          <div className="w-16 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-3"></div>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Categorized toolkit encompassing modern languages, frameworks, system design, and computer science fundamentals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`relative group bg-linear-to-br from-neutral-900/90 via-neutral-950/90 to-black/90 border border-white/10 rounded-2xl p-6 ${category.borderHover} transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/5 ${
                idx === 1 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Subtle background glow */}
              <div className={`absolute top-0 right-0 w-36 h-36 bg-linear-to-br ${category.accent} rounded-full blur-3xl -z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h4>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 font-medium">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mb-5">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 px-3 py-2 bg-neutral-800/70 hover:bg-neutral-800 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 cursor-default shadow-xs"
                      >
                        <IconComponent
                          className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110"
                          style={{ color: skill.color }}
                        />
                        <span className="text-xs md:text-sm font-medium text-neutral-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;