import React, { useState, useEffect } from "react";
import PostComponent from "../Components/postComponent";
import { useParams } from "react-router-dom";
import ButtonComponent from "./buttonComponent";

const PostDetail = ({ title, text, comments }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = async () => {
    if (!title || !text ) {
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
          author:"user",
          content:text,
         
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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPost();
  }, [id]);

  const [data, setData] = useState(null);

  return (
    <div>
      <PostComponent
        title={data.title}
        text={data.content}
        color={data.color}
        comments={data.comments}
      />
      <ButtonComponent buttonText="Create comment" onClick={handleSubmit} disabled={loading}/>
    </div>
  );
};

export default PostDetail;
