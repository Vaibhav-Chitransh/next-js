'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const {city} = useParams();
  return (
    <div className='text-white mt-15 w-1/2 mx-6'>
        {city} is a great city
    </div>
  )
}

export default page