import Login from "./pages/login/Login";
import Register from "./pages/signup/Register";

import "./App.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="flex items-center justify-center h-screen text-white bg-cover "
      style={{
        background:
          "url('https://wallup.net/wp-content/uploads/2018/09/27/13853-gradient.jpg"
      }}
    >
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
