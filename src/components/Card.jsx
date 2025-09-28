// src/components/Card.jsx
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ type }) => {
  return (
    <Link to="/video/test" className="no-underline">
      <div
        className={`cursor-pointer mb-${type === "sm" ? "2.5" : "11"} ${
          type === "sm" ? "flex gap-2.5" : "w-[360px]"
        }`}
      >
        {/* Video Thumbnail */}
        <img
          src="./img/logo.png"
          alt="video"
          className={`${
            type === "sm" ? "h-[120px]" : "h-[202px]"
          } w-full bg-gray-400 flex-1 object-cover`}
        />

        {/* Details */}
        <div
          className={`flex gap-3 flex-1 ${
            type !== "sm" ? "mt-4" : ""
          }`}
        >
          {/* Channel Image */}
          {type !== "sm" && (
            <img
              src="./img/logo.png"
              alt="channel"
              className="w-9 h-9 rounded-full bg-gray-400"
            />
          )}

          {/* Texts */}
          <div>
            <h1 className="text-sm font-medium text-gray-900 dark:text-gray-200">
              Test Video
            </h1>
            <h2 className="text-xs text-gray-500 dark:text-gray-400 my-2">
              Fonclick 
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              660,908 views • 1 day ago
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
