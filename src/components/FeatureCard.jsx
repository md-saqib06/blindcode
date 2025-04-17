import React from 'react'

const FeatureCard = ({ title, description }) => {
  return (
    <div className='p-6 flex flex-col space-y-4 rounded-xl items-center bg-violet-950/20 z-20 backdrop-blur-3xl'>
      <h3 className='text-xl text-purple-300/70 text-center'>
        {title}
      </h3>
      <p className='text-[1rem] text-center'>
        {description}
      </p>
    </div>
  )
}

export default FeatureCard