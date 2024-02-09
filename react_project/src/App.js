import Login from "./pages/login/Login";
import Register from "./pages/signup/Register";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import { getDatabase,ref,set } from 'firebase/database';
import {app} from './firebase'
const db=getDatabase(app);

function App() {

  const pushData=()=>{
    set(ref(db,'users/tabrez'),{
      id:1,
      name:'tabrez khan',
      age:20,
    })
  }

  return (
    <div
      className="flex items-center justify-center h-screen text-white bg-cover "
      style={{
        background:
          "url('https://wallup.net/wp-content/uploads/2018/09/27/13853-gradient.jpg"
      }}
    >
      <button onClick={pushData}> put data</button>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
