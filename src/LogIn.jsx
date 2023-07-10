import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/Home");
  }
  function navigateSignUp() {
    navigate("/SignUp");
  }
  return (
    <div className=" mt-10 text-center text-2xl lg:w-1/4 ml-96 rounded-lg  h-full text-black bg-gray-200 ">
      
      <h1 className="text-xl font-bold">Log In</h1>
      <div>
        <label className="bock text-sm font-medium leading-6 mt-4">Email</label>
      </div>
      <div className="mt-3 flex justify-center ">
        <input
          id="mail"
          name="Email"
          type="Email"
          placeholder="youremail@gmail.com"
          className="block  text-center border-solid border-2  rounded-full  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
        />
      </div>
      <div>
        <label className="block text-sm font-medium leading-6 mt-4">
          Password
        </label>
      </div>
      <div className="mt-3 flex justify-center ">
        <input
          id="Password"
          name="Password"
          type="Password"
          className="block  text-center border-solid border-2  rounded-full  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
        />
      </div>
      <button
        onClick={navigateHome}
        type="submit"
        className="mt-5 text-white bg-blue-500 text-sm rounded-full focus-outline-none font-medium px-5 py-3 text-center mr-2 mb-2"
      >
        Log In
      </button>
      <div className=" mt-10 text-center text-sm leading-9 tracking-tight text-black">
        <p>
          Do not have an account?
          <a href="#" onClick={navigateSignUp}>
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
  
};

export default LogIn;
