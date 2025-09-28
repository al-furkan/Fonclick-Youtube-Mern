// src/components/Comment.jsx
import React from "react";

const Comment = () => {
  return (
    <div className="flex gap-3 my-6">
      {/* Avatar */}
      <img
        src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
        alt="avatar"
        className="w-12 h-12 rounded-full"
      />

      {/* Comment Details */}
      <div className="flex flex-col gap-2 text-gray-900 dark:text-gray-200">
        <div className="flex items-center gap-1 text-sm font-medium">
          John Doe
          <span className="text-gray-500 dark:text-gray-400 text-xs font-normal ml-1">
            1 day ago
          </span>
        </div>
        <span className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </span>
      </div>
    </div>
  );
};

export default Comment;
