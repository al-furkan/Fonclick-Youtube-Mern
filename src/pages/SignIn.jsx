import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import loginImage from "../img/logo.png";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="w-[100%] h-screen flex flex-col md:flex-row bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Left Side - Image */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <img
          src={loginImage}
          alt="Auth Illustration"
          className="w-full max-w-[600px] object-contain drop-shadow-lg"
        />
      </div>

      {/* Right Side - Auth Card */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-[500px] bg-white/20 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
          
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-md">
              {isSignIn ? "Welcome Back 👋" : "Create Account 🚀"}
            </h1>
            <p className="text-gray-100 dark:text-gray-300 mt-2 text-sm sm:text-base">
              {isSignIn
                ? "Sign in to continue your journey"
                : "Join us and start your journey today"}
            </p>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300/40 dark:border-gray-600/40 rounded-lg bg-white/30 dark:bg-gray-700/40 text-gray-900 dark:text-white placeholder-gray-200 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            )}
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full px-4 py-3 border border-gray-300/40 dark:border-gray-600/40 rounded-lg bg-white/30 dark:bg-gray-700/40 text-gray-900 dark:text-white placeholder-gray-200 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300/40 dark:border-gray-600/40 rounded-lg bg-white/30 dark:bg-gray-700/40 text-gray-900 dark:text-white placeholder-gray-200 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
            {!isSignIn && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border border-gray-300/40 dark:border-gray-600/40 rounded-lg bg-white/30 dark:bg-gray-700/40 text-gray-900 dark:text-white placeholder-gray-200 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            )}
            <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transition">
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-1 border-gray-300/40 dark:border-gray-600/40" />
            <span className="px-4 text-gray-200 dark:text-gray-400 text-sm">or</span>
            <hr className="flex-1 border-gray-300/40 dark:border-gray-600/40" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-3 w-full py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white/70 dark:bg-gray-700/70 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-600 transition font-semibold shadow-md">
              <FcGoogle size={24} /> Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 w-full py-3 border border-blue-700 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition font-semibold shadow-md">
              <FaFacebook size={24} /> Continue with Facebook
            </button>
          </div>

          {/* Toggle between Sign In & Sign Up */}
          <div className="text-center mt-4 text-gray-200 dark:text-gray-400 text-sm">
            {isSignIn ? (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setIsSignIn(false)}
                  className="text-yellow-300 hover:underline cursor-pointer font-semibold"
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setIsSignIn(true)}
                  className="text-yellow-300 hover:underline cursor-pointer font-semibold"
                >
                  Sign In
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
