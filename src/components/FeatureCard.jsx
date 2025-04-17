import React from 'react'

const FeatureCard = ({ title, description }) => {
  return (
    <div className='p-4 flex flex-col space-y-4 rounded-3xl items-center bg-violet-950 z-10'>
      <h3 className='text-4xl text-purple-300/70 text-center'>
        {title}
      </h3>
      <p className='text-3xl text-center'>
        {description}
      </p>
    </div>
  )
}

export default FeatureCard