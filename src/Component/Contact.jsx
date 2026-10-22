import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { ExternalLink, Loader2, Mail, Copy, Check, Send, Sparkles, User, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const primaryEmail = "khandelwalhimanshu2105@gmail.com";

  const socialLinks = [
    {
      platform: 'GitHub',
      handle: '@HimanshuKK08',
      role: 'Source Code & Repositories',
      url: 'https://github.com/HimanshuKK08',
      icon: FaGithub,
      color: '#FFFFFF',
      accentGlow: 'from-purple-500/15 via-white/5 to-transparent',
      hoverBorder: 'hover:border-white/30',
      badgeBg: 'bg-white/10 text-white',
    },
    {
      platform: 'LinkedIn',
      handle: 'Himanshu Khandelwal',
      role: 'Career & Professional Network',
      url: 'https://www.linkedin.com/in/himanshu-khandelwal-0762802ba/',
      icon: FaLinkedin,
      color: '#0A66C2',
      accentGlow: 'from-blue-600/15 via-sky-500/5 to-transparent',
      hoverBorder: 'hover:border-blue-500/40',
      badgeBg: 'bg-blue-500/10 text-blue-400',
    },
    {
      platform: 'LeetCode',
      handle: '@himanshu_kk_21',
      role: '450+ Solved & Contest Ratings',
      url: 'https://leetcode.com/u/himanshu_kk_21/',
      icon: SiLeetcode,
      color: '#FFA116',
      accentGlow: 'from-amber-500/15 via-orange-500/5 to-transparent',
      hoverBorder: 'hover:border-amber-500/40',
      badgeBg: 'bg-amber-500/10 text-amber-400',
    },
    {
      platform: 'Discord',
      handle: 'himanshu_0808',
      role: 'Direct Chat & Tech Hangouts',
      url: 'https://discord.com/channels/himanshu_0808',
      icon: FaDiscord,
      color: '#5865F2',
      accentGlow: 'from-indigo-500/15 via-purple-600/5 to-transparent',
      hoverBorder: 'hover:border-indigo-500/40',
      badgeBg: 'bg-indigo-500/10 text-indigo-400',
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(primaryEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Himanshu,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${primaryEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill out all fields.');
      return;
    }

    setIsSending(true);
    setStatusMessage('');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // If EmailJS env keys are available, use them
    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY && !SERVICE_ID.startsWith('YOUR_')) {
      emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Himanshu',
        },
        PUBLIC_KEY
      )
        .then(() => {
          setIsSending(false);
          setStatusMessage('Message sent successfully! 👍');
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.warn('EmailJS error, falling back to mail client:', error);
          setIsSending(false);
          sendViaMailto();
          setStatusMessage('Opening your email client to send your message! 🚀');
          setFormData({ name: '', email: '', message: '' });
        });
    } else {
      // Direct mailto launcher for immediate, 100% reliable message delivery
      setTimeout(() => {
        setIsSending(false);
        sendViaMailto();
        setStatusMessage('Opening your email client to send your message! 🚀');
        setFormData({ name: '', email: '', message: '' });
      }, 400);
    }
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-6 py-20 relative">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Available for Internships & Projects</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
        <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto">
          Have an opportunity, a project idea, or just want to chat about engineering? My inbox is always open.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Left Column: Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-linear-to-br from-neutral-900/95 via-neutral-950/95 to-black border border-white/10 hover:border-blue-500/30 rounded-2xl p-7 md:p-9 shadow-xl overflow-hidden group transition-all duration-300"
        >
          {/* Ambient card glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1.5">Send a Message</h3>
            <p className="text-xs md:text-sm text-neutral-400">
              Fill out the form and I'll get back to you promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-neutral-300 mb-2">
                <User className="w-3.5 h-3.5 text-blue-400" />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800/70 border border-white/10 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-neutral-300 mb-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>Email Address</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-800/70 border border-white/10 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-xs font-medium text-neutral-300 mb-2">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>Message</span>
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-neutral-800/70 border border-white/10 rounded-xl text-white placeholder-neutral-500 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all resize-none"
                placeholder="Tell me about your opportunity or project..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-linear-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group/btn"
            >
              {isSending ? (
                <>
                  <span>Sending message...</span>
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </>
              )}
            </button>

            {statusMessage && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-xs text-center font-medium py-2 px-3 rounded-lg border ${
                  statusMessage.includes('successfully') || statusMessage.includes('Opening')
                    ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                    : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}
              >
                {statusMessage}
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Right Column: Connect Online */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between space-y-4"
        >
          {/* Quick Direct Email Card */}
          <div className="p-5 rounded-2xl bg-linear-to-br from-blue-500/10 via-purple-500/10 to-transparent border border-blue-500/20 shadow-lg relative overflow-hidden group">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-0.5">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${primaryEmail}`}
                    className="text-sm md:text-base font-bold text-white hover:text-blue-400 transition-colors break-all"
                  >
                    {primaryEmail}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                type="button"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-neutral-200 hover:text-white transition-all cursor-pointer shrink-0 shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Platform Cards */}
          <div className="space-y-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, x: 2 }}
                  transition={{ duration: 0.2 }}
                  className={`relative flex items-center gap-4 px-5 py-3.5 bg-linear-to-br from-neutral-900/90 via-neutral-950/90 to-black border border-white/10 ${link.hoverBorder} rounded-xl transition-all duration-300 group overflow-hidden shadow-md`}
                >
                  {/* Subtle platform glow on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-r ${link.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`}
                  />

                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 shrink-0 group-hover:scale-105 transition-transform"
                  >
                    <Icon className="w-5 h-5" style={{ color: link.color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-white">
                        {link.platform}
                      </span>
                      <span className="text-xs text-neutral-400 font-mono truncate">
                        {link.handle}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 truncate">
                      {link.role}
                    </p>
                  </div>

                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
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