import React, { lazy, Suspense, useState } from 'react'
const Login=lazy(()=>import('./LoginPage'))
const Lazyloading = () => {
    const [load,setLoad]=useState(false)
  return (
    <div>
      <h1>Lazy Loading</h1>
      {load?<Suspense fallback={<h1>Loading....</h1>}><Login/></Suspense>:null}
      <button onClick={()=>setLoad(true)}>Load Login page</button>
    </div>
  )
}

export default Lazyloading
