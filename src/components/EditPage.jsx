import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const { id } = useParams();
  const navigate=useNavigate()
 useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const url = "http://localhost:3000/users/" + id;
    let response = await fetch(url);
    response = await response.json();
    console.log("user edit id :", response);
    setName(response.name);
    setAge(response.age);
  };

 const updateUser=async()=>{
    const updatedUser="http://localhost:3000/users/"+id;
    let response = await fetch(updatedUser,{
        method:"PUT",
        body:JSON.stringify({name,age})
    })
    response=await response.json()
    navigate("/")
    console.log("user updated",response)
 }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="enter age"
      />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
}

export default EditPage;
