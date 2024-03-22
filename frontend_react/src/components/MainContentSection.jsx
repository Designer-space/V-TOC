import React from 'react'
import DressShirts from '../assets/Images/Dress_Shirts.jpg'
import PoloShirts from '../assets/Images/Polo_Shirts.jpg'
import DenimJackets from '../assets/Images/Denim_Jackets.jpg'
import LeatherJackets from '../assets/Images/Leather_Jackets.jpg'
import Card from './Card'

const cardDetails = [
  {
    cardImg: DressShirts,
    cardTitle: 'Dress Shirts',
    cardDesc: 'Mix and match patterns like stripes, solids, and plaids with a mere click.'
  },
  {
    cardImg: PoloShirts,
    cardTitle: 'Polo Shirts',
    cardDesc: 'Experiment with dazzling hues, finding the perfect polo has never been easier!'
  },
  {
    cardImg: DenimJackets,
    cardTitle: 'Denim Jackets',
    cardDesc: 'Discover your inner rebel; accessorize your denim for maximum impact.'
  },
  {
    cardImg: LeatherJackets,
    cardTitle: 'Leather Jackets',
    cardDesc: 'Become a style icon; pair your slick leather jacket with audacious hairstyles.'
  },
]

const MainContentSection = () => {
  return (
    <div>
      <div className=" flex-col min-[800px]:flex-row items-center gap-20 md:justify-evenly py-[8vw]">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className='font-secondary text-yellow-400 text-[clamp(2rem,_0.9437rem_+_4.507vw,_5rem)] leading-none pb-4  md:w-[550px]'>Revolutionize Your Wardrobe</h2>
          <p className='text-fluid-base max-w-[700px] pl-2'>Welcome to V-TOC, The game-changer in the world of online shopping! Our revolutionary platform allows you to virtually try on stylish upper wear clothing items without leaving your home. It’s shopping redefined for the digital age. 
          Leave the frustrations of ill-fitting garments and returns behind. With our augmented reality try-on technology and diverse clothing catalog, your fashion escapades become a breeze!
          Gone are the days of wandering malls and fitting rooms. Your wardrobe refresh is now just a few clicks away, with V-TOC!</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        {
          cardDetails.map((card, index) => {
            return <Card key={ index } cardImg={ card.cardImg } cardTitle={ card.cardTitle } cardDesc={ card.cardDesc } />
          })
        }
      </div>
    </div>
  )
}

export default MainContentSection