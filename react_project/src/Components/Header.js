import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-20 w-full absolute bg-amber-600 flex justify-between items-center p-3">
      <div>
        <div className="text-3xl tracking-wider font-semibold text-yellow-300">
          CHAT<span className=" text-yellow-100">APP</span>
        </div>
      </div>
      <div>
        <ul className="flex gap-8 text-2xl font-600">
          <li>
            {" "}
            <Link to={"/"}>Home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/contact"}>Contact</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/Login"}>Login</Link>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
