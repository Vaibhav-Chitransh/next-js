import React from 'react'

const page = async () => {
  // promise setTimeout to show custom loading page
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  })

  return (
    <div>
      Home page
    </div>
  )
}

export default page
