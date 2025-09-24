import React from 'react'
import useToggleCustomHook from './useToggleCustomHook'

const CustomHook = () => {
    const [value,toggleValue]=useToggleCustomHook(true)
  return (
    <div>
        <button onClick={toggleValue}>Toggle button </button>
     {value? <h1>Custom Hook in react js</h1>:null}
    </div>
  )
}

export default CustomHook
