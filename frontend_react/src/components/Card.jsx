import React from 'react'

const Card = ({cardImg, cardTitle, cardDesc}) => {
  return (
    <div className=''>
      <div className="select-none pointer-events-none overflow-hidden rounded-3xl aspect-[12/8] grayscale ">
        <img src={ cardImg } alt="" className='object-cover block ' />
      </div>
      <h3 className='font-secondary text-yellow-400 py-4 text-[1.5rem] '>{ cardTitle }</h3>
      <p className=''> { cardDesc } </p>
    </div>
  )
}

export default Card