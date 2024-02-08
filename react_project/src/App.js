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
          "url('https://th.bing.com/th/id/R.581b26c3727c37ef44a08b382a59359e?rik=0jGMXSD8jj5vTw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fzwaIWUh.jpg&ehk=SdSfqPHy5aQwka7ox7nlPO5Zhbm8t1v7m6ICvlY64Cs%3d&risl=&pid=ImgRaw&r=0",
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
