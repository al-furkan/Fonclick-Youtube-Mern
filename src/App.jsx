// src/App.jsx
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <div className="flex min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">

          {/* Sidebar */}
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Main Content */}
          <div className="flex-1 flex flex-col transition-all duration-300">

            {/* Navbar */}
            <div className="sticky top-0 z-30">
              <Navbar />
            </div>

            {/* Page Content */}
            <main className="flex-1 p-2 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/video/:id" element={<Video />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
