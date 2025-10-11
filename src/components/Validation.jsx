import React, { useState } from "react";

const Validation = () => {
  const [name, setName] = useState();
  const [nameerr, setNameerr] = useState();
  const [pass, setPass] = useState();
  const [passerr, setPaserr] = useState();

  const handleName = (e) => {
    console.log(e.target.value);
    if (e.target.value.length > 4) {
      setNameerr("name must be 4 alphabet");
    } else {
      setNameerr();
    }
  };
  const handlePass = (e) => {
    console.log(e.target.value);
    let regex = /^[A-Z0-9]+$/i;
    if (regex.test(e.target.value)) {
      setPaserr();
    } else {
      setPaserr("Special char not allowed");
    }
  };
  const buttonClicked = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <input type="text" placeholder="enter username" onChange={handleName} />
      <br/>
      <span className="text-red-500">{nameerr && nameerr}</span>
      <br/>
      <input type="text" placeholder="enter password" onChange={handlePass} />
      <br/>
      <span className="text-red-500">{passerr && passerr}</span>
      <br/>
      <button disabled={nameerr || passerr} onClick={buttonClicked}>
        Login
      </button>
    </div>
  );
};

export default Validation;
