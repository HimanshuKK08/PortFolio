import React from 'react'
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";


const About = () => {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skills = [
    { icon: TbBrandCpp, name: "C++" },
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: IoLogoJavascript, name: "JavaScript"},
    { icon: RiReactjsFill, name: "React" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: TbBrandNodejs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    // { icon: DiPython, name: "Python" }
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl"
      >
        <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
          I'm a Computer Science undergraduate passionate about transforming ideas into functional applications. From building full-stack blog platforms to simulating memory management systems in C, I thrive on solving complex problems with clean, efficient code.
        </p>
        <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8">
          What drives me isn't just writing code — it's collaborating with talented teams to build meaningful solutions. I'm proactive, curious, and always eager to learn new technologies that help both me and my team grow.
        </p>
        <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-10">
          Currently seeking internship opportunities where I can contribute as a developer and continue evolving as a software engineer.
        </p>

        <div className="border-t border-white/10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">Technical Skills</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-4 md:grid-cols-8 gap-6 md:gap-8"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={item}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="text-4xl md:text-5xl text-neutral-400 group-hover:text-blue-400 transition-colors">
                  <skill.icon />
                </div>
                <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About