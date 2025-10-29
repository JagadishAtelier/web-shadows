import React from 'react';
import Navbar from "@/Components/Navbar.jsx";
import HeroSection from "@/Components/HomePage/HeroSection.jsx";
import HomeAbout from "@/Components/HomePage/HomeAbout.jsx";
import MouseTrail from '@/Components/MouseTrail';

function Home() {
  return (
    <div>
      <MouseTrail />
      <Navbar />
      <HeroSection />
      <HomeAbout />
    </div>
  );
}

export default Home;
