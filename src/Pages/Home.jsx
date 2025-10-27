
import HeroSection from '../Components/HomePage/HeroSection'
import HomeAbout from '../Components/HomePage/HomeAbout'
import MouseTrail from '../Components/MouseTrail'
import Navbar from '../Components/Navbar'
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