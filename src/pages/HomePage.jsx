import { Particles } from '@/components/magicui/particles'
import React from 'react'

const HomePage = () => {
  return (
    <div className='min-h-screen'>
      <Particles 
      className="absolute inset-0 z-0"
      quantity={100}
      ease={80}
      color="#ffffff"
      refresh/>
    </div>
  )
}

export default HomePage