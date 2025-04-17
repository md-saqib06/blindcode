import React from 'react'
import FeatureCard from '../FeatureCard'

const features = [{
        title: "Smooth Animations",
        desc: "Enjoy elegant transitions that enhance user experience without distractions."
    },
    {
        title: "Custom Themes",
        desc: "Dark-themed interface with sci-fi asthetics and consistent branding."
    },
    {
        title: "Timed Inspection",
        desc: "Inspect the interface page only for 10 minutes each hour - maximize every second."
    },
    {
        title: "Pressure Challenge",
        desc: "Face the pressure of high-pressure coding-perfect for testing your skills."
    },
    {
        title: "Interactive Elements",
        desc: "Recreate animations and UI behaviour with attention to detail."
    },
]

const FeatureSection = () => {
  return (
    // Background
    <div className='flex gap-40 flex-wrap text-white bg-violet-950 z-10'>
       {features.map((feature) => (
          <FeatureCard
                title={feature.title}
                description={feature.desc}
            />
       ))}
    </div>
  )
}

export default FeatureSection