import HeroSection from '@/Components/HomePage/HeroSection'
import HomeAbout from '@/Components/HomePage/HomeAbout'
import Navbar from '@/Components/Navbar'
import React from 'react'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <HomeAbout/>
    </div>
  )
}

export default Home