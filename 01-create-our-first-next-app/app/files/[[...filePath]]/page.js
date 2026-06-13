import React from 'react'

// setting absolute metadata
export const metadata = {
  title: {
    absolute: 'My Files'
  }
}

const FilePath = async ({params}) => {
    const {filePath} = await params;
  return (
    <div>FilePath: /{filePath?.join('/')}</div>
  )
}

export default FilePath