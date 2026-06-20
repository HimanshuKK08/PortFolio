import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
// import completeImg from "../assets/Images/complete.png";

import { motion, useMotionValue, useSpring } from "framer-motion";

// Sample certification data - Replace with your actual certifications
const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const certifications = [
    {
      id: 1,
      // image: completeImg,
      title: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      year: "2024",
      description: "Cloud architecture design, scalability patterns, and AWS service integration for enterprise solutions.",
      link: "https://coursera.org/share/69981a1f17c75bf53939cc6479b1c99a"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      title: "React Developer Certification",
      organization: "Meta",
      year: "2023",
      description: "Advanced React patterns, hooks, performance optimization, and modern frontend architecture.",
      link: "https://www.coursera.org/professional-certificates/meta-react-native"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      title: "Google Data Analytics Professional",
      organization: "Google",
      year: "2023",
      description: "Data cleaning, visualization, SQL queries, and actionable insights from complex datasets.",
      link: "https://grow.google/certificates/data-analytics/"
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % certifications.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  const currentCert = certifications[currentIndex];

  return (
    <section id="certificates" className="w-full max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative bg-linear-to-br from-neutral-900 via-neutral-950 to-black border border-white/10 rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-3 bg-linear-to-br from-neutral-800 to-neutral-900 flex items-center justify-center min-h-96 p-8">
            <motion.img
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              src={currentCert.image}
              alt={currentCert.title}
              className="max-w-full max-h-96 object-contain rounded-lg shadow-md"
            />
          </div>

          <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold rounded-full mb-4">
                {currentCert.year}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{currentCert.title}</h3>
              <p className="text-lg text-neutral-300 font-medium mb-4">{currentCert.organization}</p>
              <p className="text-neutral-400 mb-6 leading-relaxed">{currentCert.description}</p>
              <a href={currentCert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                View Certificate
                <ExternalLink size={18} />
              </a>
            </motion.div>
          </div>
        </div>

        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110">
          <ChevronLeft className="text-gray-800" size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110">
          <ChevronRight className="text-gray-800" size={24} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {certifications.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-neutral-600 hover:bg-neutral-500'}`}
          />
        ))}
      </div>
    </section>
  );
};


export default Certifications;