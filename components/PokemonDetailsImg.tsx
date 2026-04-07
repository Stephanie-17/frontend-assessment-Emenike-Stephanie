'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
interface PokemonDetailsImgProps {
  image: string | null,
  name: string
}
const PokemonDetailsImg = ({image, name}: PokemonDetailsImgProps) => {
  const [imgError, setImgError] = useState(false)
  return (
    	imgError || !image ? (
						<div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
							<span className="text-gray-300 text-4xl">?</span>
						</div>
					) : (<Image onError={()=>setImgError(true)} src={image} alt={name} width={300} height={250} />)
  )
}

export default PokemonDetailsImg