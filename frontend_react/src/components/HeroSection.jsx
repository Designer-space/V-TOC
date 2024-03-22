import React from 'react'

const HeroSection = () => {
  return (
    <>
      <div className="h-[90vh]">
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className='text-fluid-header leading-none uppercase font-secondary relative'>v-toc</h1>
          <div className="absolute w-[60%] h-[55%] bg-transparent border border-accent-100/50 rounded-[50%] rotate-[15deg]"></div>
          <div className="absolute w-[60%] h-[55%] bg-transparent border border-accent-100/50 rounded-[50%] -rotate-[24deg]"></div>
          <div className="absolute w-[60%] h-[55%] bg-transparent border border-accent-100/50 rounded-[50%] -rotate-[10deg]"></div>
          <p className='uppercase'>Virtual Fashion Lab</p>
        </div>
      </div>
    </>
  )
}

export default HeroSection