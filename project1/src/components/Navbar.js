'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='w-full bg-amber-50 py-2 fixed top-0'>
        <div className='flex justify-between mx-4'>
            <div className='flex items-center gap-2 mx-4'>
                <Image src={'/earth_image.png'} alt='logo' width={30} height={30} />
                <span className='font-bold'>Travel Guide</span>
            </div>
            <div>
              <ul className='flex justify-between gap-8 items-center'>
                <Link href={'/'} className={pathname === '/' ? 'text-blue-500' : ''}><li>Home</li></Link>
                <Link href={'/destinations'} className={pathname === '/destinations' ? 'text-blue-500' : ''}><li>Destinations</li></Link>
                <Link href={'/contact'} className={pathname === '/contact' ? 'text-blue-500' : ''}><li>Contact</li></Link>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar