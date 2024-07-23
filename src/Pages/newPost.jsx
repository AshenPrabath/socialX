import React, { useState } from "react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("blue");
  return (
    <div className="mx-14">
      <div className="border-b-2">
        <h1 className="text-2xl font-semibold py-2">Create a post</h1>
      </div>

      <div className="mb-4 pt-10">
        <label className="block mb-2 font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Content</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4 flex">
        <label className="block mb-2 font-medium">Select Color</label>
        <div className="flex space-x-4">
          <button
            onClick={() => setColor("blue")}
            className={`p-2 rounded-full ${color === "blue" ? "border-4 border-black" : ""}`}
            style={{ backgroundColor: "blue" }}
          />
          <button
            onClick={() => setColor("green")}
            className={`p-2 rounded-full ${color === "green" ? "border-4 border-black" : ""}`}
            style={{ backgroundColor: "green" }}
          />
          <button
            onClick={() => setColor("red")}
            className={`p-2 rounded-full ${color === "red" ? "border-4 border-black" : ""}`}
            style={{ backgroundColor: "red" }}
          />
        </div>
      </div>
      <button
        onClick={()=>{}}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Publish
      </button>
    </div>
  );
};

export default NewPost;
