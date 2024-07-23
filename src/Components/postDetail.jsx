import React, { useState, useEffect } from "react";
import PostComponent from "../Components/postComponent";
import { useParams, Link } from "react-router-dom";
import ButtonComponent from "./buttonComponent";


const PostDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [data, setData] = useState({title:"Loading..",content:"Loading...",comments:[]});
  const fetchPost = async () => {
    setLoading(true);
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
    finally {
      setLoading(false);
      setText("");
    }
  };
  // const getPostDetail=async(() => {
  const handleSubmit = async () => {
    if (!text ) {
      // setError("Please fill out all fields.");
      return;
    }
    
   
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:3001/api/comments/${id}`, {
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
      fetchPost();
     
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    

    fetchPost();
  }, [id]);

  
  if (loading) return <p>Loading...</p>;
  return (
    <div className="w-1/2 mx-auto">
     <div className="border-b-2 mb-4">
        <h1 className="text-2xl font-semibold py-2">Post Details</h1>
      </div>
      <PostComponent
        title={data.title}
        text={data.content}
        color={data.color}
        comments={data.comments}
      />
      {data.comments.length > 0 ? (
        data.comments.map((comment) => (
            <div key={comment._id} className="mt-4 p-4 border rounded">
              <p>{comment.content}</p>
              
            </div>
          ))
        ) : (
          <p>No comments found.</p>
        )}
      <div className="mb-4">
          <textarea
            placeholder="Description"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      <ButtonComponent buttonText="Create comment" onClick={handleSubmit} disabled={loading}/>
      <Link to={`/`}>
      <p className="pt-4 text-md">Back to home</p>
      </Link>
    </div>
  );
};

export default PostDetail;
