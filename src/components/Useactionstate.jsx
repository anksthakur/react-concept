import React, { useActionState } from "react";

const Useactionstate = () => {
  const handleSubmit = (prevData, formData) => {
    // console.log("Called");
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return { error: "username must be 5 char" ,name,password};
    } else if (!regex.test(password)) {
      return { error: "password must be in num or alp" ,password,name};
    } else {
      return { message: "Login Successful",name,password };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit);
  console.log(data);
  return (
    <div>
      <h1>Validation using useActionState</h1>
      {data?.message && <span>{data?.message}</span>}
      {data?.error && <span>{data?.error}</span>}
      <form action={action}>
        {/* defaultValue use hota hai ki agar input m value hai to input m he rhegi*/}
        <input defaultValue={data?.name} type="text" name="name" placeholder="enter username" />
        <br />
        <input defaultValue={data?.password} type="text" name="password" placeholder="enter password" />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Useactionstate;
