import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  const userData = [
    { id: 1, name: "Anup" },
    { id: 2, name: "Kanu" },
  ];
  return (
    <div>
      <h1>User Page</h1>
      {userData.map((item) => (
        <div>
          <h2><Link to={"/user/"+item.id} >{item.name}</Link></h2>
        </div>
      ))}
    </div>
  );
};

export default User;
