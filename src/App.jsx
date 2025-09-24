import { useState } from "react";
import "./App.css";
import ContextClass from "./components/ContextClass";
import { SubjectData } from "./components/ContextData";
import CustomHook from "./components/CustomHook";
import Logics from "./components/Logics";
import Useeffect from "./components/useeffect";
import Useformstatus from "./components/Useformstatus";
import Useref from "./components/Useref";
import HomePage from "./pages/HomePage";

function App() {
  const [subject, setSuject] = useState("English");
  return (
    <div>
      <h1 className="">react + vite</h1>
      <CustomHook />
      <Useformstatus />
      <HomePage />
      <Logics />
      <Useeffect />
      <Useref />

      <SubjectData.Provider value={subject}>
        <div style={{ backgroundColor: "yellow" }}>
          <select value={subject} onChange={(e)=>setSuject(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <h1 className="text-3xl">Main Context API</h1>
          <ContextClass />
        </div>
      </SubjectData.Provider>
    </div>
  );
}

export default App;
