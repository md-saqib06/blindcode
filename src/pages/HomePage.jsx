import { Particles } from '@/components/magicui/particles'
import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import HeroSection from '@/components/herosection/HeroSection'
import FeatureSection from '@/components/features/FeatureSection'
import Footer from '@/components/Footer'

const HomePage = () => {
  return (
    <div className='bg-zinc-950 overflow-x-hidden'>
      <div className='relative w-screen h-screen bg-violet-950/20'>
      <Navbar />
      <HeroSection />
      <div className='bg-zinc-950'>
        <FeatureSection/>
        <Footer/>
      </div>
      <Particles
        className="absolute inset-0 z-0 w-full h-screen"
        quantity={120}
        ease={80}
        color="#fff"
        vx={0.1}
        vy={0.8}
        refresh={true} />
        
    </div>
    </div>
    
  )
}

export default HomePage