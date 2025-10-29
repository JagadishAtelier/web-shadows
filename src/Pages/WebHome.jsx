import HeroSection from '@/Components/HomePage/WebHeroSection';
import HomeAbout from '@/Components/HomePage/WebHomeAbout';
import Navbar from '@/Components/WebNavbar';
import React from 'react';

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HomeAbout/>
    </div>
  );
}

export default Home;
