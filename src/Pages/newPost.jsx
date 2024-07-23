import React, { useState } from "react";
import ButtonComponent from "../Components/buttonComponent";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("blue");
  return (
    <div className="w-1/2 mx-auto">
      <div className="border-b-2">
        <h1 className="text-2xl font-semibold py-2">Create a post</h1>
      </div>

      <div className="w-10/12 mx-auto">
        <div className="mb-4 pt-10">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Description"
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
              className={`p-5 rounded-full ${
                color === "blue" ? "border-4 border-black" : ""
              }`}
              style={{ backgroundColor: "blue" }}
            />
            <button
              onClick={() => setColor("green")}
              className={`p-5 rounded-full ${
                color === "green" ? "border-4 border-black" : ""
              }`}
              style={{ backgroundColor: "green" }}
            />
            <button
              onClick={() => setColor("red")}
              className={`p-5 rounded-full ${
                color === "red" ? "border-4 border-black" : ""
              }`}
              style={{ backgroundColor: "red" }}
            />
          </div>
        </div>
      </div>
      <ButtonComponent buttonText="Create post" onClick={() => {}}/>
    </div>
  );
};

export default NewPost;
