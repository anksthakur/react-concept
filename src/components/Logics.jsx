import { useState } from "react";
import Logics1 from "./Logics1";
import Clock from "./Clock";
const Logics = () => {
  const [data, setData] = useState("Banana");
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [skill, setSkill] = useState([]);
  const [gender, setGender] = useState("Male");
  const [city, setCity] = useState("hp");
  const [color,setColor]=useState('blue')
  const handleSkill = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setSkill([...skill, e.target.value]);
    } else {
      setSkill([...skill.filter((item) => item != e.target.value)]);
    }
  };

  function opration(a, b, op) {
    if (op == "+") {
      return a + b;
    } else if (op == "-") {
      return a - b;
    } else {
      return a * b;
    }
  }
  const fruit = (name) => {
    alert(name);
  };
  //   let fruits = "Banana";
  const updateFruitsValue = () => {
    setData("Apple");
    console.log(data);
  };

  return (
    <>
      <p>{data}</p>
      {/* to display the fruit vlue */}
      <button onClick={updateFruitsValue}>click me</button>
      {/* to change the fruit value */}
      <button className="p-1 border-1" onClick={() => fruit("apple")}>
        apple
      </button>
      {/* parameter pass in function */}
      <h1>{opration(100, 20, "")}</h1>
      {toggle ? <h1>I am here</h1> : null}
      {/* for toggle */}
      <button onClick={() => setToggle(!toggle)}>hide</button>
      {/* for multipe if else ternory operator */}
      <button className="p-1 border-1" onClick={() => setCount(count + 1)}>
        count click
      </button>
      {count === 0 ? (
        <h1>count value 0</h1>
      ) : count === 1 ? (
        <h1>count value 1</h1>
      ) : count === 2 ? (
        <h1>count value 2</h1>
      ) : null}

      {/* <Logics1 />
    <Logics1 name="Anup"/> */}
      {/* jab html pass krni ho */}
      <Logics1>
        <h1>Hello Thakur</h1>
      </Logics1>

      {/*   input field logics */}
      <br />
      <h2>THis is a input field</h2>
      <input
        type="text"
        placeholder="Enter a name"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <h2>{value}</h2>
      <button onClick={() => setValue("")}>Clear Value</button>
      {/* checkboxes */}
      <br />
      <h2>Select your skills</h2>
      <input onChange={handleSkill} type="checkbox" id="php" value="php" />
      <label htmlFor="php">Php</label>
      <br />
      <input onChange={handleSkill} type="checkbox" id="js" value="js" />
      <label htmlFor="js">JS</label>
      <br />
      <input onChange={handleSkill} type="checkbox" id="react" value="react" />
      <label htmlFor="react">React</label>
      <h2>{skill}</h2>
      {/* radio buttons */}
      <br />
      <h3>Select Gender</h3>
      <input
        type="radio"
        name="gender"
        id="male"
        value="Male"
        onChange={(e) => setGender(e.target.value)}
        checked={gender == "Male"}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        id="female"
        value="Female"
        onChange={(e) => setGender(e.target.value)}
        checked={gender == "Female"}
      />
      <lable htmlFor="female">Female</lable>
      <h3>Selected Gender : {gender}</h3>
      {/* dropdown */}
      <br />
      <h2>Select City</h2>
      <select defaultValue={"hp"} onChange={(e) => setCity(e.target.value)}>
        <option value="chd">CHD</option>
        <option value="hp">HP</option>
        <option value="pun">PUN</option>
      </select>
      <h3>Selected City : {city}</h3>
      <br />
      {/* Clock */}
      <br />
      <h1>Clock</h1>
      <select onChange={(e)=>setColor(e.target.value)}>
        <option value={"blue"}>Blue</option>
        <option value={"yellow"}>Yellow</option>
        <option value={"green"}>Green</option>
      </select>
      <Clock color={color}/>
    </>
  );
};

export default Logics;
