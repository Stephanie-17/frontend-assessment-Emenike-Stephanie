import React from 'react'

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
    <p className="text-lg font-medium text-gray-700">No Pokémon found</p>
    <p className="text-sm text-gray-400 mt-1">
      Try a different name or clear your search
    </p>
  </div>
  )
}

export default EmptyState