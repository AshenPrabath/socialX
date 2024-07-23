import React from "react";

const PostComponent = ({ title, text, comments }) => {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{text}</p>
      <p className="text-gray-500">Comments: {comments}</p>
    </div>
  );
};

export default PostComponent;
