import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import StatsSection from '../components/sections/StatsSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
    </div>
  );
};

export default Home;