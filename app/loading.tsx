import React from 'react'

const loading = () => {
  return (
    <div className='w-full flex justify-center p-4'>
      <div className='max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={i} className='animate-pulse'>
            
            <div className='w-full h-48 bg-primary rounded-t-2xl' />
            
            {/* Content skeleton */}
            <div className='p-4 space-y-3 bg-white/10 rounded-b-2xl'>
              <div className='h-4 bg-gray-400 rounded w-1/3'></div>
              <div className='h-4 bg-gray-400 rounded w-1/2'></div>
              <div className='h-4 bg-gray-400 rounded w-3/4'></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default loading