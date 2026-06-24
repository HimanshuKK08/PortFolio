import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoSendSharp } from "react-icons/io5";
import { ExternalLink, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/HimanshuKK08', icon: FaGithub },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/himanshu-khandelwal-0762802ba/', icon: FaLinkedin },
    { platform: 'LeetCode', url: 'https://leetcode.com/u/engineeringcourses323/', icon: FaCode },
    { platform: 'Discord', url: 'https://discord.com/channels/himanshu_0808', icon: FaDiscord }
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all fields.');
      return;
    }

    setIsSending(true);
    setStatusMessage('');

    // REPLACE THESE THREE STRINGS WITH YOUR EMAILJS ACCOUNT DETAILS
    const SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';

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
        setFormData({ name: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        setIsSending(false);
        setStatusMessage('Something went wrong. Please try again.');
        console.error('EmailJS Error:', error);
      });
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

          {/* Changed container to a formal <form> element */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
              <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Your name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="your.email@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
              <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Tell me about your project or opportunity..." required />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <span>Sending...</span>
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <IoSendSharp />
                </>
              )}
            </button>

            {statusMessage && (
              <p className={`text-sm text-center font-medium mt-2 ${statusMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}>
                {statusMessage}
              </p>
            )}
          </form>
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