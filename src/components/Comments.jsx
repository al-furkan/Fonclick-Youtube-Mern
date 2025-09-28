// src/components/Comments.jsx
import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* New Comment Input */}
      <div className="flex items-center gap-3">
        <img
          src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-b border-gray-300 dark:border-gray-700 bg-transparent text-gray-900 dark:text-gray-200 outline-none px-2 py-1"
        />
      </div>

      {/* List of Comments */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
