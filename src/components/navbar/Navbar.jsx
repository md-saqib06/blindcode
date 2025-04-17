import React from 'react'
import NVLogo from "@/assets/NVLogo.webp"
import IITMLogo from "@/assets/IITMLogo.webp"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full h-20 px-16 font-orbitron bg-violet-950/5 text-white shadow-2xl'>
      <div className='flex gap-4 items-center'>
        <img src={NVLogo} alt="NVLogo" className='h-12' />
        <img src={IITMLogo} alt="IITMLogo" className='h-12'/>
        <div className='text-violet-200 text-2xl'>Celestia 1.0</div>
      </div>
      <div className='flex justify-between items-center gap-8 font-orbitron'>
        <div>Home</div>
        <div>Features</div>
        <div>About</div>
        <div>Contact</div>
      </div>
    </nav>
  )
}

export default Navbar