import Login from "./pages/login/Login";
import Register from "./pages/signup/Register";

import "./App.css"
import Signup from "./pages/signup/Register";
import { Route, Routes } from "react-router-dom";

function App() {

  return <div className="text-white h-screen flex justify-center items-center bg-cover" style={{"background": "url('https://images.pexels.com/photos/1496378/pexels-photo-1496378.jpeg?auto=compress&cs=tinysrgb&w=600"}}>
    <Routes>
      <Route path="Login" element={<Login/>}/>
      <Route path="Register" element={<Register/>}/>
    </Routes>
  </div>;
}

export default App;
