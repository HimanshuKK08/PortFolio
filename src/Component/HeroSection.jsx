import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "../assets/Images/profile.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const ref = useRef(null);

  // Raw pointer position as a -0.5 to 0.5 fraction of card size
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  // Smooth the raw input so the tilt eases rather than snapping
  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const sx = useSpring(px, springConfig);
  const sy = useSpring(py, springConfig);

  // Map smoothed position to rotation. 12deg max is the sweet spot:
  // enough to read as "3D object" without feeling like a gimmick.
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  // Subtle parallax lift for the photo + a sheen that tracks the cursor
  const photoX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const photoY = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const glowX = useTransform(sx, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["20%", "80%"]);

  function handleMouseMove(e) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    px.set(0);
    py.set(0);
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20 pb-4 relative">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
        className="relative max-w-6xl w-full rounded-3xl border border-white/10 bg-linear-to-br from-neutral-900 via-neutral-950 to-black shadow-2xl p-8 md:p-14 lg:p-16 will-change-transform"
      >
        {/* Cursor-tracking sheen — sells the "physical surface" feel */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${glowX} ${glowY}, rgba(255,255,255,0.06), transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-2xl -z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6" style={{ transform: "translateZ(20px)" }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight text-white"
            >
              Himanshu Khandelwal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-blue-400 font-medium"
            >
              Software Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-400 max-w-md text-base md:text-lg"
            >
              Building software with a problem-solving mindset — combining strong foundations in Data Structures & Algorithms, system design principles, and full-stack development to create practical, scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="w-72 h-88 sm:w-80 sm:h-96 md:w-84 md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              style={{
                transform: "translateZ(60px)",
                x: photoX,
                y: photoY,
              }}
            >
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Subtle Scroll Hint */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-6 flex flex-col items-center gap-1 text-xs text-neutral-400 hover:text-blue-400 transition-colors cursor-pointer group"
      >
        <span className="font-medium tracking-wide">Scroll down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-neutral-400 group-hover:text-blue-400" />
        </motion.div>
      </motion.button>
    </section>
  );
};
export default HeroSection;