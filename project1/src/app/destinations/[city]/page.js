import React from 'react'
import parisImage from '@/assets/parisImage.png'
import newYorkImage from '@/assets/newYorkImage.png'
import tokyoImage from '@/assets/tokyoImage.png'
import Image from 'next/image'

const page = async ({params}) => {
    const {city} = await params;
  return (
    <div className='mx-6 text-white mt-15 w-1/2'>
        <span>
            Welcome to {city}
        </span>
        <div className='mt-4'>
          {city === 'Paris' && <Image src={parisImage} alt='parisImage' width={200} height={200} />}
          {city === 'NewYork' && <Image src={newYorkImage} alt='newYorkImage' width={200} height={200} />}
          {city === 'Tokyo' && <Image src={tokyoImage} alt='tokyoImage' width={200} height={200} />}
        </div>
    </div>
  )
}

export default page