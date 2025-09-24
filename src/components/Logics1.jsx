import React from 'react'
// agar props ni pass kiya hoga parent m se to ye show hoga "new user"
// const Logics1 = ({name="New User"}) => {
//   return (
//     <div>
//       <h1>Hi{name}</h1>
//     </div>
//   )
// }
//jab bha se html pass kri ho parent se
const Logics1 = ({children}) => {
  return (
    <div className='p-0.5 m-0.5 text-red-400'>
    {children}
    </div>
  )
}

export default Logics1
