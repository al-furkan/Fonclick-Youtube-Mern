// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white dark:bg-gray-900 h-14 flex items-center justify-end px-4 shadow-md z-50">
      {/* Search Bar */}
      <div className="absolute left-0 right-0 mx-auto w-11/12 max-w-md md:w-2/5 flex items-center border border-gray-300 dark:border-gray-700 rounded px-3 py-1">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent outline-none text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <SearchOutlinedIcon className="text-gray-500 dark:text-gray-400 w-5 h-5" />
      </div>

      {/* Sign In Button */}
      <Link to="/signin">
        <button className="flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition">
          <AccountCircleOutlinedIcon className="w-5 h-5" />
          SIGN IN
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
