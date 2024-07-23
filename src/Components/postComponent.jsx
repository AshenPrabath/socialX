import React from "react";

const PostComponent = ({ title, text, comments, color }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold ">{title}</h2>
      <p>{text}</p>
      <p>{color}</p>
      <p className="text-gray-500">Comments: {comments.length}</p>
    </div>
  );
};

export default PostComponent;
