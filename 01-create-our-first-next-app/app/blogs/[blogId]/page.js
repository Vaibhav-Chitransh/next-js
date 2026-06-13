import React from 'react'

// dynamic metadata
export async function generateMetadata({params}) {
  const {blogId} = await params;
  return {
    title: `Blog ${blogId}`
  }
}

const Blog = async ({params}) => {
    const {blogId} = await params;
  return (
    <div>
        Blog {blogId}
    </div>
  )
}

export default Blog