import { useState } from "react";
import "./App.css";
import ContextClass from "./components/ContextClass";
import { SubjectData } from "./components/ContextData";
import CustomHook from "./components/CustomHook";
import Logics from "./components/Logics";
import Useeffect from "./components/useeffect";
import Useformstatus from "./components/Useformstatus";
import Useref from "./components/Useref";
import HomePage from "./components/HomePage";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import PageNotFound from "./components/PageNotFound";
import College from "./components/College";
import Student from "./components/Student";
import User from "./components/User";
import Userdetails from "./components/Userdetails";
import Api from "./components/Api";
import Validation from "./components/Validation";
import Useactionstate from "./components/Useactionstate";

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
      {/* Context API */}
      <SubjectData.Provider value={subject}>
        <div style={{ backgroundColor: "yellow" }}>
          <select value={subject} onChange={(e) => setSuject(e.target.value)}>
            <option value="">Select Subject</option>
            <option value="Maths">Maths</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
          <h1 className="text-3xl">Main Context API</h1>
          <ContextClass />
        </div>
      </SubjectData.Provider>
      {/* Routes */}
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
      <Link  to="/user">User</Link>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>} />
         {/* Dynamic routing */}
        <Route path="/user" element={<User/>}/>
        <Route path="/user/:id" element={<Userdetails/>} />
       
        {/* if path was wrong then show 404 page */}
        {/* <Route path="/*" element={<PageNotFound/>}/> */}

        {/* if user enter a wrong path redirect to home automatically*/}
        <Route path="/*" element={<Navigate to="/"/>}/>

        {/* nested routes */}
        <Route path="/college" element={<College/>}>
        <Route path="student" element={<Student/>}/>
        </Route>
      </Routes>

      {/* API */}
      <Api/>
      <br/>
      <br/>
      {/* validation */}
      {/* <Validation/> */}
      <Useactionstate/>
    </div>
  );
}

export default App;
