import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { signup } from "../../service/AuthService";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signup(inputs);
      setIsLoading(false);
      navigate("/login"); 
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="relative mb-4">
          <input
            type="text"
            name="username"
            onChange={change}
            value={inputs.username}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <IoPerson />
          </div>
        </div>
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            onChange={change}
            value={inputs.email}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <MdOutlineAlternateEmail />
          </div>
        </div>
        <div className="relative mb-4">
          <input
            type="password"
            name="password"
            onChange={change}
            value={inputs.password}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <RiLockPasswordFill />
          </div>
        </div>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
        <p className="mt-4 text-center">
          Already have an account?
          <Link to="/login" className="text-blue-500 underline ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
