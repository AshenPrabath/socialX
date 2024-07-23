import React, { useState } from "react";
import ButtonComponent from "../Components/buttonComponent";
import {Link } from "react-router-dom";


const NewPost = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("blue");
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = async () => {
    if (!title || !text || !color) {
      // setError("Please fill out all fields.");
      return;
    }
    
   
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content:text,
          color,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      const result = await response.json();
      setTitle("");
      setText("");
      setColor("blue");
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 mx-auto">
      <div className="border-b-2">
        <h1 className="text-2xl font-semibold py-2">Create a post</h1>
      </div>

      <div className=" mx-auto">
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

        <div className="mb-4 flex justify-between">
          <label className="block mb-2 font-medium">Tile Color</label>
          <div className="flex space-x-4">
            <button
              onClick={() => setColor("blue")}
              className={`p-5 rounded-md ${
                color === "blue" ? "border-4 border-black" : ""
              }`}
              style={{ backgroundColor: "blue" }}
            />
            <button
              onClick={() => setColor("green")}
              className={`p-5 rounded-md ${
                color === "green" ? "border-4 border-black" : ""
              }`}
              style={{ backgroundColor: "green" }}
            />
            <button
              onClick={() => setColor("red")}
              className={`p-5 rounded-md ${
                color === "red" ? "border-4 border-black" : ""
              }`}
              style={{ backgroundColor: "red" }}
            />
          </div>
        </div>
      </div>
      <ButtonComponent buttonText="Publish" onClick={handleSubmit} disabled={loading}/>
      <Link to={`/`}>
      <p className="pt-4 text-md">Back to home</p>
      </Link>
    </div>
  );
};

export default NewPost;
