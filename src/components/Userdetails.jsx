import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Userdetails = () => {
    const paramsData=useParams()
    console.log("id :",paramsData)
  return (
    <div>
      <h1>User Details Page</h1>
      <h2>User id is : {paramsData.id}</h2>
      <h2><Link to="/user">Back</Link></h2>
    </div>
  )
}

export default Userdetails
