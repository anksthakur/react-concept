import React, { useState } from 'react'

const HomePage = () => {
  const[data,setData]=useState(0)
  return (
    <>
      <h1>value :{data}</h1>
      <button className='bg-red-500 rounded-2xl p-1' onClick={()=>{setData(data+1)}}>Click Me</button>
    </>
  )
}

export default HomePage
