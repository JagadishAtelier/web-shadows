import React from 'react';
import Navbar from '@/Components/Navbar';
import HeroSection from '@/Components/HomePage/HeroSection';
import HomeAbout from '@/Components/HomePage/HomeAbout';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HomeAbout />
    </div>
  );
}

export default Home;
