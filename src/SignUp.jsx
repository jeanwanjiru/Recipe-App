// import React from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/Home");
  }
  return (
    <div className=" mt-10 text-center rounded-lg text-2xl lg:w-1/4 ml-96 h-full font-bold text-black bg-gray-200">
    
      <h1>SignUp</h1>
      <div>
        <label className="block text-sm font-medium leading-6 mt-4">Name</label>
      </div>
      <div className="mt-3 flex justify-center ">
        <input
          placeholder="Enter your name"
          id="Name"
          name="Name"
          type="Name"
          className="block  text-center border-solid border-2  rounded-full  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
        />
      </div>
      <label className=" block text-sm font-medium leading-6 mt-2">Email</label>
      <div className="mt-3 flex justify-center">
        <input
          id="Email"
          name="Email"
          type="Email"
          className="block   text-center border-solid border-2  rounded-full py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400   sm:text-sm sm:leading-6"
        />
      </div>
      <label className="block text-sm font-medium leading-6 mt-2">
        Password
      </label>
      <div className="mt-3 flex justify-center">
        <input
          id="Password"
          name="Password"
          type="Password"
          className="block  text-center border-solid border-2  rounded-full  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
        />
      </div>

      <button
        onClick={navigateHome}
        type="button"
        className="mt-5 text-white bg-blue-200 text-sm rounded-full focus-outline-none font-medium px-5 py-3 text-center mr-2 mb-2"
      >
        Create Account
      </button>
      <div className=" mt-10 text-center text-sm leading-9 tracking-tight text-black">
        <h3>
          Already have an account?<a href="./login">Log in</a>
        </h3>
      </div>
      </div>
 
  );
};

export default SignUp;
