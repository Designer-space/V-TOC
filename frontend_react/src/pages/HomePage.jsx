import React from 'react'
import NavBar from './NavBar'
import HeroSection from '../components/HeroSection'
import MainContentSection from '../components/MainContentSection'
import CTASection from '../components/CTASection'
import FooterSection from '../components/FooterSection'

const HomePage = () => {
  return (
    <>
      <main>
        <div className="max-w-[1440px] mx-auto m-h-screen px-4">
          <NavBar />
          <HeroSection />
          <MainContentSection />
          <CTASection />
          <FooterSection />
        </div>
      </main>
    </>
  )
}

export default HomePage