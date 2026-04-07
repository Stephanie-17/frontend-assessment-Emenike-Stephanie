import Link from 'next/link'
import React from 'react'

interface BreadcrumbNavProps {
  id: number,
  name: string
}
const BreadcrumbNav = ({id, name}: BreadcrumbNavProps) => {
  return (
    <nav className='w-full justify-self-start' >
      <ul className='flex gap-2'>
        <li  className='text-white/50'><Link href={'/'}>Home</Link></li>
        <li className='text-white/50'>/</li>
        <li  className='text-white/50'>Pokémon</li>
        <li className='text-white/50'>/</li>
        <li className='font-semibold capitalize'><Link href={`/pokemon/${id}`}>{name}</Link></li>
      </ul>
    </nav>
  )
}

export default BreadcrumbNav