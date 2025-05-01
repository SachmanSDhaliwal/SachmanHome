import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"

const WorkExperience = () => {
  return (
    <section className='pt-20 pb-24' id='work'>
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className='text-center text-4xl font-semibold tracking-tighter mb-10 text-white drop-shadow-lg'
        >
          WORK EXPERIENCE
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }} 
          className='space-y-8 relative' 
        >
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-stone-50/30' />
          
          {EXPERIENCES.map((experience, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1, delay: index * 0.2 }} 
              key={index} 
              className='rounded-xl border border-stone-50/30 bg-black/60 backdrop-blur-sm p-6 relative ml-12 text-white drop-shadow-sm'
            >
              {/* Timeline dot */}
              <div className='absolute left-[-2.5rem] top-6 w-4 h-4 rounded-full bg-white border border-black' />
              
              <h3 className='text-2xl font-semibold'>{experience.title}</h3>
              <p className='text-xl text-stone-200'>{experience.company}</p>
              <p className='text-sm text-stone-300'>{experience.duration}</p>
              <p className='mt-2 text-base text-stone-100'>{experience.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
