import React from "react";

const PostComponent = ({ title, text, comments, color }) => {
  return (
    <div className="border-2 p-4 mb-4 flex-col items-start rounded-md ">
      <div className="mb-2">
        <h2 className={`flex text-xl font-bold items-start text-${color}-400 `}>{title}</h2>
        <p className="flex items-start ">{text}</p>
      </div>
      <p className="border-t-2 flex justify-end text-gray-500">Comments: {comments.length}</p>
    </div>
  );
};

export default PostComponent;
