import React from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";

const Login = () => {
  return (
    <div>
      <div className="relative p-8 border rounded-md shadow-lg  bg-slate-800 border-slate-400 backdrop-filter backdrop-blur-sm bg-opacity-30">
        <h1 className="mb-6 text-4xl font-bold text-center text-white">
          Login
        </h1>
        <form action="">
          <div className="relative my-4">
            <input
              type="email"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0  border-b-2 border-gray-300  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
            >
              Your Email
            </label>
            <BiUser className="absolute top-0 -mx-3 right-4" />
          </div>

          <div>
            <input
              type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0  border-b-2 border-gray-300  appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-9 scale-75 mx-[1px] -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
            >
              Your Password
            </label>
            <AiOutlineUnlock className="absolute mx-5 -mt-5 right-4" />
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="Remember me">Remember Me</label>
            </div>
            <Link to="" className="text-blue-500">
              Forget Password?
            </Link>
          </div>

          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            type="Submit"
          >
            Login
          </button>

          <div>
            <span className="m-4 ">
              New Here?
              <Link className="text-blue-500" to="/Register">
                Create an Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
