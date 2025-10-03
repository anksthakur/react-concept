import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Api = () => {
  const [userData, setuserData] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUser();
  }, []);

  const getUser = async () => {
    // get method
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setuserData(response?.users);
    setLoading(false);
    // console.log("data :",response?.users)
  };

  // POST Method
  // const postUrl = "http://localhost:3000/user"
  // let postResponse = await fetch(postUrl,{
  //   method:"POST",
  //   body:JSON.stringify({name,email,age})
  // })
  // response=await response.json()
  // console.log(postResponse)

  //Delete Method
  // const deleteUser = async (id) => {
  //   const deleteUrl = "https://dummyjson.com/users";
  //   let response = await fetch(deleteUrl + "/" + id,{
  //     method:"delete"
  //   });
  //   console.log("Response : ",response)
  //   response = await response.json();
  //   if (response) {
  //     console.log("record deleted");
  //   }
  //   // jab koi record delete kiya to uhsi time page pe updated record show ho uhske ley getUser function ko call kiya
  //   getUser()
  // };

  // Edit User
 //got to the edit page
  const editUser=async(id)=>{
    Navigate("/edit"+id)
  }

  return (
    <div>
      <h1>Fetching Data : </h1>
      {!loading ? (
        userData &&
        userData.map((user) => (
          <ul key={user.id}>
            <li>{user.firstName}</li>
          </ul>
        ))
      ) : (
        <h1>Loading data...</h1>
      )}
    {/* delete user details */}
      {/* <button onClick={() => deleteUser(userData.id)}>Delete</button> */}
      {/* edit user details */}
      <button onClick={()=>editUser(userData.id)}>Edit User</button>
    </div>
  );
};

export default Api;
