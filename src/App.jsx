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

  return(
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <HeroSection />
      <About />
      <Projects onViewMore={handleViewMoreProjects} />
      <CodingProfiles />
      {/* <Certifications /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App


// import React from 'react'
// import Hero from './Component/Hero'

// const App = () => {

//   return (
//     <>
//       <Hero/>
//     </>

//   )
// }

// export default App
