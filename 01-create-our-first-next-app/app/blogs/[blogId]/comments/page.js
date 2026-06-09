import React from 'react'

const Comments = async ({params}) => {
    const {blogId} = await params;
  return (
    <div>
        <p>All comments on blog {blogId}</p>
    </div>
  )
}

export default Comments