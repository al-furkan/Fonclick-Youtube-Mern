// src/pages/Video.jsx
import React from "react";
import {
  ThumbUpOutlined,
  ThumbDownOffAltOutlined,
  ReplyOutlined,
  AddTaskOutlined,
} from "@mui/icons-material";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Video = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 lg:px-10 py-6 bg-white dark:bg-gray-900">

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-6">

        {/* Video Player */}
        <div className="w-full rounded-xl overflow-hidden shadow-md">
          <video 
            className="w-full aspect-video"
            controls
            poster="https://dummyimage.com/1280x720/cccccc/000000&text=Video+Thumbnail"
          >
            <source src="/assets/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Test Video
        </h1>

        {/* Views + Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-gray-700 dark:text-gray-300">
          <span className="text-sm md:text-base">
            7,948,154 views • Jun 22, 2022
          </span>
          <div className="flex gap-4 flex-wrap">
            <button className="flex items-center gap-2 hover:text-blue-500">
              <ThumbUpOutlined /> 123
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500">
              <ThumbDownOffAltOutlined /> Dislike
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500">
              <ReplyOutlined /> Share
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500">
              <AddTaskOutlined /> Save
            </button>
          </div>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Channel Info */}
        <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="Channel Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-900 dark:text-gray-100">
               Fonclick 
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                200K subscribers
              </span>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus laborum delectus unde quaerat dolore culpa sit.
              </p>
            </div>
          </div>
          <button className="bg-red-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-red-700 transition">
            SUBSCRIBE
          </button>
        </div>

        <hr className="border-gray-300 dark:border-gray-700" />

        {/* Comments */}
        <Comments />
      </div>

      {/* Right Sidebar - Recommendations */}
      <div className="lg:w-96 flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i} type="sm" />
        ))}
      </div>
    </div>
  );
};

export default Video;
