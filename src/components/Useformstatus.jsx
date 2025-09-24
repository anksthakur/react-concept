// import { useId } from "react";
import { useFormStatus } from "react-dom";

const Useformstatus = () => {
  // const hook = useId()
  // console.log("hookkkkkkk",hook)
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit");
  };

  function CustomForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="enter name" />
        <input type="text" placeholder="enter password" />
        <br />
        <br />
        <button disabled={pending}>{pending ? "Submiting" : "Submit"}</button>
      </div>
    );
  }
  return (
    <div>
      <h1> useFormStatus Hook</h1>
      <form action={handleSubmit}>
        <CustomForm />
        {/* <h2>Hook : {hook}</h2> */}
      </form>
    </div>
  );
};

export default Useformstatus;
