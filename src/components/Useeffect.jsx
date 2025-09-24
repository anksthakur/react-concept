import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [data,setData]=useState(0)
    useEffect(()=>{
        sideEffectofState()
    },[])
    function sideEffectofState(){
        console.log("function call every time")
    }
    //if i did not put it on useeffect then this  function will call every time eg every time i will click on button it will call automatically
    // sideEffectofState();
  return (
    <div>
      <h1>Use Effect</h1>
      <button onClick={()=>setData(data+1)}>Data {data}</button>

    </div>
  )
}

export default Useeffect
