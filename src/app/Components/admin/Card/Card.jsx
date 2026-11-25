import React from 'react'

export default function Card({children}) {
  return (
    <div className='bg-white rounded-md px-2 py-4 text-black h-full'>{children}</div>
  )
}
