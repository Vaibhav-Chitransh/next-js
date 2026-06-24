import React from 'react'

const page = async ({params}) => {
    const {username} = await params;
  return (
    <div>
        user - {username}
    </div>
  )
}

export default page