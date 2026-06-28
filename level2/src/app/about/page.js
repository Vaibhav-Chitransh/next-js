import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
        About page

        <Image src={'/vercel.svg'} alt='vercel_image' width={100} height={100} />

        {/* Image from remote url */}
        <Image src={'https://images.unsplash.com/photo-1782233941435-7d4c3cdac42a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8'} alt='remoteImage' width={100} height={100} />
    </div>
  )
}

export default About