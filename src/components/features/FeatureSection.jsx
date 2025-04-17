import React from 'react'
import FeatureCard from '../FeatureCard'

const features = [{
        title: "Smooth Animations",
        desc: "Enjoy elegant transitions that enhance user experience without distractions."
    },
    {
        title: "Custom Themes",
        desc: "Aminations"
    },
    {
        title: "Timed Inspection",
        desc: "Aminations"
    },
    {
        title: "Pressure Challenge",
        desc: "Aminations"
    },
    {
        title: "Interactive Elements",
        desc: "Aminations"
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