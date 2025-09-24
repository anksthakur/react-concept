import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const College = () => {
  return (
    <div>
      <h1>College</h1>
      <NavLink to="student">Student</NavLink>
      {/* nested route ko display kren ke ley */}
      <Outlet/>
    </div>
  )
}

export default College
