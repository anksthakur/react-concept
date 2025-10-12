import React, { useReducer } from "react";
const emptyData = {
    name: "",
    lastName: "", 
    email: "",
    city: "",
  };
const reducer=(data,action)=>{
  // console.log(data,action)
return{...data,[action.type]:action.value}
}
const Usereducer = () => { 
  const [state,dispatch]=useReducer(reducer,emptyData);
  // console.log(state)
  return (
    <div>
      <input type="text" onChange={(e)=>dispatch({value:e.target.value,type:'name'})} placeholder="enter name" />
      <br />
      <input type="text" onChange={(e)=>dispatch({value:e.target.value,type:"lastName"})} placeholder="enter lastname" />
      <br />
      <input type="text" onChange={(e)=>dispatch({value:e.target.value,type:"email"})} placeholder="enter email" />
      <br />
      <input type="text" onChange={(e)=>dispatch({value:e.target.value,type:"city"})} placeholder="enter city" />
      <br />
      <button onClick={()=>console.log(state)}>Add Details</button>
      <br/><br/>
      <ul>
        <li>name:{state.name}</li>
        <li>lastname:{state.lastName}</li>
        <li>email:{state.email}</li>
        <li>city:{state.city}</li>
      </ul>
    </div>
  );
};

export default Usereducer;
