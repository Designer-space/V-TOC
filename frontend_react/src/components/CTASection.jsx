import React from 'react'
import { Link } from 'react-router-dom'

const CTASection = () => {
  return (
    <div className='text-center max-w-[500px] mx-auto py-[10vw] '>
      <h2 className='font-secondary text-[clamp(2rem,_0.9437rem_+_4.507vw,_5rem)] text-yellow-400'>Get Started</h2>
      <p className="">Ready to embrace the future of fashion? Visit our interactive dressing room and let V-TOC transform your style choices forever!</p>
      <div className="font-secondary flex items-center justify-center gap-8 pt-8">
        <Link to={'/SignUp'}>
          <div className="px-6 py-2 bg-accent-100 text-accent-900 rounded-full hover:bg-yellow-400 focus:bg-yellow-400 hover:text-accent-100 focus:text-accent-100 transition-colors duration-200">
            <p>Sign Up</p>
          </div>
        </Link>
        <Link to={'LogIn'}>
        <div className="px-6 py-2 bg-accent-100 text-accent-900 rounded-full hover:bg-yellow-400 focus:bg-yellow-400 hover:text-accent-100 focus:text-accent-100 transition-colors duration-200">
          <p>Log In</p>
        </div>
        </Link>
        <Link to={'sample'}>
        <div className="px-6 py-2 bg-accent-100 text-accent-900 rounded-full hover:bg-yellow-400 focus:bg-yellow-400 hover:text-accent-100 focus:text-accent-100 transition-colors duration-200">
          <p>Sample</p>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default CTASection