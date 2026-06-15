'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const BlogNotFound = () => {
    const a = usePathname();
    console.log(a);
  return (
    <h1>
        Custom Blog not found page
    </h1>
  )
}

export default BlogNotFound