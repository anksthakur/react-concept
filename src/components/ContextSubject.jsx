import React, { useContext } from 'react'
import { SubjectData } from './ContextData'

const ContextSubject = () => {
    const subject=useContext(SubjectData)
  return (
    <div style={{backgroundColor:"red",padding:10}}>
      <h1> Subject is : {subject}</h1>
    </div>
  )
}

export default ContextSubject
