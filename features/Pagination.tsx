'use client'
import Link from 'next/link';
import React from 'react'

interface PaginationProps {
  currentPage: number
  totalPages: number
}
const Pagination = ({currentPage, totalPages}: PaginationProps) => {
  
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages

  return (
    <div className='flex justify-between gap-4 mt-10 items-center'>
      {
        hasPrev ? (
          <Link href={`/?page=${currentPage - 1}`} >
            <button className='rounded-lg bg-yellow-900/50 px-5 py-1 cursor-pointer'>Prev</button>
          </Link>
        ) : <button className='rounded-lg bg-gray-500 px-5 py-1 cursor-not-allowed'>Prev</button>
      }

      <p className='font-semibold'>{currentPage} out of {totalPages} pages</p>

      {
        hasNext ? (
          <Link href={`/?page=${currentPage + 1}`} >
            <button className='rounded-lg bg-yellow-900/50 px-5 py-1 cursor-pointer'>Next</button>
          </Link>
        ) : <button className='rounded-lg bg-gray-500 px-5 py-1 cursor-not-allowed'>Next</button>
      }
    </div>
  )
}

export default Pagination