import HeroSection from '@/Components/WebHomePage/WebHeroSection';
import HomeAbout from '@/Components/WebHomePage/WebHomeAbout';
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
