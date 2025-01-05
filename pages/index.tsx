import React, { useState } from 'react';
import HomePage from '../components/HomePage';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home'); // 'home', 'about', 'howItWorks'

  return (
    <div>
      <nav>
        <ul>
        </ul>
      </nav>

      {activeSection === 'home' && <HomePage />}
      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'howItWorks' && <HowItWorks />}
    </div>
  );
};

export default Home;
