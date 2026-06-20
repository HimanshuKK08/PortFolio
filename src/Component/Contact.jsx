import React from 'react'
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaDiscord } from "react-icons/fa";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { IoSendSharp } from "react-icons/io5";
import { ExternalLink } from 'lucide-react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/HimanshuKK08', icon: FaGithub },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/himanshu-khandelwal-0762802ba/', icon: FaLinkedin },
    { platform: 'LeetCode', url: 'https://leetcode.com/u/engineeringcourses323/', icon: FaCode },
    { platform: 'Discord', url: 'https://discord.com/channels/himanshu_0808', icon: FaDiscord }
  ];

  const handleSubmit = () => {
    window.location.href = `mailto:himanshu.khandelwal23@vit.edu?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
        <p className="text-neutral-400 text-lg">Open to new opportunities and collaborations</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="your.email@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell me about your project or opportunity..." />
            </div>
            <button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <span>Send Message</span>
              <IoSendSharp />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Connect Online</h3>
          <div className="space-y-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 px-6 py-4 bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-xl hover:border-blue-500/50 transition-all group"
                >
                  <Icon className="w-6 h-6 text-neutral-400 group-hover:text-blue-400 transition-colors" />
                  <span className="text-lg font-medium text-white">{link.platform}</span>
                  <ExternalLink className="w-5 h-5 text-neutral-500 ml-auto group-hover:text-blue-400 transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;