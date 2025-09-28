// src/components/Menu.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
  HistoryOutlined,
  LibraryMusicOutlined,
  SportsEsportsOutlined,
  SportsBasketballOutlined,
  MovieOutlined,
  ArticleOutlined,
  LiveTvOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  SettingsBrightnessOutlined,
} from "@mui/icons-material";
import logo from "../img/logo.png";

export default function Menu({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky bottom-0 top-0">
        {/* Toggle Button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Sidebar */}
    <div
  className={`bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg md:w-64 w-full md:sticky md:top-0 h-screen transform transition-transform duration-300 z-40
    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
>
        <div className="p-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-25" />
          </Link>

          {/* Menu Items */}
          <nav className="space-y-2">
            <Link to="/" className="flex items-center gap-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <Home fontSize="small" /> Home
            </Link>
            <div className="flex items-center gap-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <ExploreOutlined fontSize="small" /> Explore
            </div>
            <div className="flex items-center gap-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <SubscriptionsOutlined fontSize="small" /> Subscriptions
            </div>

            <hr className="my-3 border-gray-300 dark:border-gray-700" />

            <div className="flex items-center gap-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <VideoLibraryOutlined fontSize="small" /> Library
            </div>
            <div className="flex items-center gap-2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <HistoryOutlined fontSize="small" /> History
            </div>

            <hr className="my-3 border-gray-300 dark:border-gray-700" />

            {/* Sign in */}
            <div className="text-sm">
              <p>Sign in to like videos, comment, and subscribe.</p>
              <Link to="/signin">
                <button className="mt-2 flex items-center gap-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition">
                  <AccountCircleOutlined fontSize="small" /> SIGN IN
                </button>
              </Link>
            </div>

            <hr className="my-3 border-gray-300 dark:border-gray-700" />

            <h2 className="text-gray-500 dark:text-gray-400 text-xs font-semibold mb-2">
              BEST OF FonClickTube
            </h2>
            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <LibraryMusicOutlined fontSize="small" /> Music
            </div>
            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <SportsBasketballOutlined fontSize="small" /> Sports
            </div>
            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <SportsEsportsOutlined fontSize="small" /> Gaming
            </div>
            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <MovieOutlined fontSize="small" /> Movies
            </div>
            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <ArticleOutlined fontSize="small" /> News
            </div>
            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <LiveTvOutlined fontSize="small" /> Live
            </div>

            <hr className="my-3 border-gray-300 dark:border-gray-700" />

            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <SettingsOutlined fontSize="small" /> Settings
            </div>
            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <FlagOutlined fontSize="small" /> Report
            </div>
            <div className="flex items-center gap-3 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
              <HelpOutlineOutlined fontSize="small" /> Help
            </div>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 p-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
            >
              <SettingsBrightnessOutlined fontSize="small" />{" "}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </div>
          </nav>
        </div>
      </div>

      </div>
    </>
  );
}
