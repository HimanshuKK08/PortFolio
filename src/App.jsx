import React, { useState } from 'react'
import TiltedCard from './Component/TiltedCard';
import NavBar from './Component/NavBar';
import About from './Component/About';
import Projects from './Component/Projects';
import CodingProfiles from './Component/CodingProfiles';
import Certifications from './Component/Certifications'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import HeroSection from './Component/HeroSection'
import AllProjects from './Component/AllProjects';
import Profile from './Component/Profile';
import SplashCursor from './Component/SplashCursor'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleViewMoreProjects = () => {
    setCurrentPage('all-projects');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  if (currentPage === 'all-projects') {
    return (
      <>
        <AllProjects onBack={handleBackToHome} />
        <Footer />
      </>
    );
  }

  return (
    <div className="relative min-h-screen bg-black text-white isolation-isolate">

      {/* 
        Fixed Physics: 
        Lowered the dissipation so the fluid survives longer, 
        and increased the radius slightly so it's visible again.
      */}
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={3.0}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={5000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />

      {/* You can leave this at z-20 or z-10, it won't matter now since the cursor is z-50 */}
      <div className="relative z-20 pointer-events-auto">
        <NavBar />
        <HeroSection />
        <About />
        <Projects onViewMore={handleViewMoreProjects} />
        <CodingProfiles />
        {/* <Certifications /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;