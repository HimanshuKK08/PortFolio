import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Send } from 'lucide-react';
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { CiLinkedin } from 'react-icons/ci';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    {
      id: 'github',
      platform: 'GitHub',
      url: 'https://github.com/HimanshuKK08',
      icon: FaGithub,
    //   hoverColor: 'hover:border-gray-400 hover:text-gray-800 hover:bg-gray-50'
    },
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/himanshu-khandelwal-0762802ba/',
      icon: FaLinkedin,
    //   hoverColor: 'hover:border-blue-700 hover:bg-blue-50'
    },
    {
      id: 'leetcode',
      platform: 'LeetCode',
      url: 'https://leetcode.com/u/engineeringcourses323/',
      icon: Code2,
    //   hoverColor: 'hover:border-orange-700 hover:bg-orange-50'
    },
    {
      id: 'discord',
      platform: 'Discord',
      url: 'https://discord.com/channels/himanshu_0808',
      icon: FaDiscord,
    //   hoverColor: 'hover:border-green-700 hover:bg-green-50'
    }
  ];

  const handleSubmit = () => {
    const mailtoLink = `mailto:hello@example.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="w-full bg-[#080d1a] py-10 px-6 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-200 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Open to new opportunities and collaborations. Reach out through the form or connect on your preferred platform.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">
              Send a Message
            </h3>
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#020617] border-gray-700 border-2 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Profile Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">
              Find Me Online
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 px-6 py-4 border-2 border-gray-700 rounded-lg transition-all ${link.hoverColor}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    aria-label={`Visit my ${link.platform} profile`}
                  >
                    <motion.div
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-6 h-6 text-gray-200" strokeWidth={2} />
                    </motion.div>
                    <span className="text-lg font-medium text-gray-200">
                      {link.platform}
                    </span>
                    <svg 
                      className="w-5 h-5 text-gray-200 ml-auto" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </motion.a>
                );
              })}
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;