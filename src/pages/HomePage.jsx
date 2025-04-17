import { Particles } from '@/components/magicui/particles'
import React from 'react'
import Navbar from '@/components/navbar/Navbar'
import HeroSection from '@/components/herosection/HeroSection'

const HomePage = () => {
  return (
    <div className='bg-zinc-950'>
      <div className='relative overflow-hidden w-screen h-screen bg-violet-950/20'>
      <Navbar />
      <HeroSection />
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