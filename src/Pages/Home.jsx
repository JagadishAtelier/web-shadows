
import HeroSection from "../Components/HomePage/HeroSection.jsx";
import HomeAbout from "../Components/HomePage/HomeAbout.jsx";
import Navbar from "../Components/Navbar.jsx";
import React from 'react'

function Home() {
  return (
    <div>
        <MouseTrail/>
        <Navbar/>
        <HeroSection/>
        <HomeAbout/>
    </div>
  )
}

export default Home