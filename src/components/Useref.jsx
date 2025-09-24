import React, { useRef } from "react";

const Useref = () => {
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log("input have all property", inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = "blue";
  };
  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} type="text" placeholder="Enter username" />
      <button onClick={inputHandler}>Focus on Input field</button>
    </div>
  );
};

export default Useref;
