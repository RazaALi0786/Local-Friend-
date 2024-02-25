import Header from './Components/Header'
// import Footer from './Components/Footer'
import "./App.css";

import { Outlet} from "react-router-dom";

function App() {
  return (
    <>
    <Header/>
    <div
      className="flex items-center justify-center h-screen text-white bg-cover "
      style={{
        background:
          "url('https://wallup.net/wp-content/uploads/2018/09/27/13853-gradient.jpg",
      }}
    >
      
      <Outlet />
      {/* <Footer/> */}
    </div>
    </>
  );
}

export default App;
