'use client'
import {PokemonTypeResponse } from '@/types';
import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation';
interface TypeFilterProps {
  types: PokemonTypeResponse
}
const TypeFilter =  ({types}: TypeFilterProps) => {
 const searchParams = useSearchParams();
 const router = useRouter()


 const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
   const params = new URLSearchParams(searchParams.toString());
   if (e.target.value === 'all') {
    params.delete("type")
   } else {
     params.set("type",e.target.value)
   }
   
   params.set("page", "1")
    router.push(`?${params.toString()}`)
 }
  
  return (
    <select onChange={handleChange} className=' border-white/50 p-2 border-2 rounded-lg '>
      <option className='bg-black' value="all">All types</option>
     {
      types.results.map(type =>(
         <option className='bg-black capitalize' value={type.name} key={type.name}>{type.name}</option>
       
      ))
     }
    </select>
  )
}

export default TypeFilter