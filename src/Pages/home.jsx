import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import PostComponent from "../Components/postComponent";
import ButtonComponent from "../Components/buttonComponent";
import Axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/posts").then((response)=>{
      setPosts(response.data);
    })
  },[])

  const addPost = () => {
    const newPost = {
      title: "New Post",
      text: "This is the text of the new post.",
      comments: 0,
    };
    setPosts([...posts, newPost]);
  };
  return (
    <div className="w-1/2 mx-auto">
      <div className="border-b-2">
        <h1 className="text-2xl font-semibold py-2">Welcome to Social X</h1>
      </div>
      <div>
        <Link to="/new-post">
          <ButtonComponent buttonText="Add New Post" onClick={addPost}/>
        </Link>
      </div>
      <div className="py-10">
        {posts.map((post) => (
          <Link to={`post/${post._id}`} key={post._id}>
            <PostComponent
              title={post.title}
              text={post.content}
              color={post.color}
              comments={post.comments}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
