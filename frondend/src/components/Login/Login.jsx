import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { login } from "../../service/AuthService";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    if (!loginData.email) {
      setError("Email is required");
      return false;
    } else if (!loginData.password) {
      setError("Password is required");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsLoading(true);
    try {
      const { data, token } = await login(loginData);
      console.log(data, token);
      console.log(data.data._id);
      localStorage.setItem('userId', data.data._id);
      localStorage.setItem('name', data.data.username);
      toast.success("Login successful!", { onClose: () => navigate("/todo") });
    } catch (error) {
      setError("Invalid email or password");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ToastContainer />

      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <div className="relative mb-4">
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
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
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
            <RiLockPasswordFill />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <p className="mt-4 text-center">
          Don't have an account?
          <Link to="/register" className="text-blue-500 underline ml-1">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
