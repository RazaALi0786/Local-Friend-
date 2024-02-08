import Login from "./pages/login/Login";
import Register from "./pages/signup/Register";

import "./App.css";
import Signup from "./pages/signup/Signup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="flex items-center justify-center h-screen text-white bg-cover "
      style={{
        background:
          "url('https://images.pexels.com/photos/1496378/pexels-photo-1496378.jpeg?auto=compress&cs=tinysrgb&w=600",
      }}
    >
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
