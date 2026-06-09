import React from 'react'

const Blog = async ({params}) => {
    const {blogId} = await params;
  return (
    <div>
        Blog {blogId}
    </div>
  )
}

export default Blog