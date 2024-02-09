// import Header from './Components/Header'
// import Footer from './Components/Footer'
import "./App.css";

import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="flex items-center justify-center h-screen text-white bg-cover "
      style={{
        background:
          "url('https://wallup.net/wp-content/uploads/2018/09/27/13853-gradient.jpg",
      }}
    >
      {/* <Header/> */}
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
