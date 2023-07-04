import React from "react";

function LogIn() {
    return (
        <div className=" mt-10 text-center text-2xl  leading-9 tracking-tight text-white bg-black rounded-full ">
            <h1 className="text-xl font-bold">Log In</h1>
            <div>
        <label className="bock text-sm font-medium leading-6 mt-4">Email</label>
      </div>
      <div className="mt-3 flex justify-center " >
        <input
         id="Email"
          name="Email"
          type="Email"
          className="block  text-center border-solid border-2  rounded-full  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
        />
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 mt-4">Password</label>
      </div>
      <div className="mt-3 flex justify-center " >
        <input
         id="Password"
          name="Password"
          type="Password"
          className="block  text-center border-solid border-2  rounded-full  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
        />
      </div>
      <button type="button"className="mt-5 text-white bg-blue-500 text-sm rounded-full focus-outline-none font-medium px-5 py-3 text-center mr-2 mb-2">
Log In
      </button>
      <div className=" mt-10 text-center text-sm leading-9 tracking-tight text-white">
      <p>Do not have an account? Sign Up</p>
      </div>
            
        </div>


    );
}

export default LogIn;
