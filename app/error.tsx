'use client'
import React from 'react'

const error = ({reset}: { reset: ()=> void }) => {
  return (
    
       <div className='min-h-screen overflow-y-hidden  flex justify-center items-center flex-col gap-4'>
      <h3 className='font-bold text-center text-2xl'>Something went wrong!</h3>
      <button className='bg-red-500 text-white cursor-pointer font-semibold px-4 py-1 rounded-lg' onClick={()=>reset()}>Try Again</button>
    </div>
    
   
  )
}

export default error