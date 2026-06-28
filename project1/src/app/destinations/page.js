'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const Destinations = () => {
    const destinations = ['NewYork', 'Paris', 'Tokyo'];
    const router = useRouter();

  return (
    <div className='text-white flex flex-col gap-4 items-center justify-center text-2xl h-full'>
        <span>Choose your Destination</span>
        <div>
            {destinations.map((des, index) => {
                return (
                    <div key={index} className='bg-white text-black m-4 px-4 py-2 text-center rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-110' onClick={() => router.push(`/destinations/${des}`)}>
                        {des}
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Destinations