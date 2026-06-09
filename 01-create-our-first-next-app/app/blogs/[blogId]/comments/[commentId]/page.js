import React from 'react'

const Comment = async ({params}) => {
    const {blogId, commentId} = await params;
  return (
    <div>
        <p>Comment {commentId} on blog {blogId} </p>
    </div>
  )
}

export default Comment