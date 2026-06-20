import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "bg-neutral-900/80 backdrop-blur-xl border border-white/10" : "bg-neutral-900/50 backdrop-blur-md border border-white/5"} rounded-full`}>
      <div className="flex items-center gap-8 px-6 py-3 text-sm text-neutral-200">
        <button onClick={() => scrollToSection("home")} className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">Home</button>
        <button onClick={() => scrollToSection("about")} className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">About</button>
        <button onClick={() => scrollToSection("projects")} className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">Projects</button>
        {/* <button onClick={() => scrollToSection("profiles")} className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">Profiles</button> */}
        <button onClick={() => scrollToSection("contact")} className="cursor-pointer opacity-80 hover:opacity-100 transition-opacity">Connect</button>
      </div>
    </nav>
  );
};
export default NavBar;