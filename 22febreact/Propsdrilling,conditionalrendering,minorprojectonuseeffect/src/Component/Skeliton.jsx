import React from 'react'

const Skeliton = () => {
  return (
    <div className='grid grid-cols-1 gap-4'>
        {Array.from({length:10}).map((ele,ind)=>(
            <div key={ind} className='bg-green-400 w-full h-40 shadow-lg rounded-lg p-4 animate-pulse '></div>
        ))}

        </div>
  )
}

export default Skeliton