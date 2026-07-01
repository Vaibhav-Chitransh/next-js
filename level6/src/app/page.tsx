import React from 'react'

const page = async () => {
  // SSR
  const response = await fetch('http://localhost:3000/api/user', {cache: 'no-store'});
  const data = await response.json();
  console.log(data);

  // SSG -> {cache: 'force-cache'} (and also by default it is ssg, so if you won't give cache then it will be ssg)

  // ISR -> {next: {revalidate: 5}}   // 5 means 5 seconds here

  return (
    <div>
      Home page
    </div>
  )
}

export default page