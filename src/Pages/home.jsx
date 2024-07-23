import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostComponent from "../Components/postComponent";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      text: "This is the text of the first post.",
      comments: 2,
    },
    {
      id: 2,
      title: "Second Post",
      text: "This is the text of the second post.",
      comments: 5,
    },
    {
      id: 3,
      title: "Third Post",
      text: "This is the text of the third post.",
      comments: 3,
    },
  ]);

  const addPost = () => {
    const newPost = {
      title: "New Post",
      text: "This is the text of the new post.",
      comments: 0,
    };
    setPosts([...posts, newPost]);
  };
  return (
    <div className="">
      <div className="border-b-2">
        <h1 className="text-2xl font-semibold">Welcome to SocialX</h1>
      </div>
      <div>
        <Link to="/new-post">
          <button
            onClick={addPost}
            className="mt-4 w-5/12 bg-green-900 text-white py-2 px-4 rounded"
          >
            Add Post
          </button>
        </Link>
      </div>
      <div className="p-10">
        {posts.map((post) => (
          <Link to={`post/${post.id}`} key={post.id}>
            <PostComponent
              title={post.title}
              text={post.text}
              comments={post.comments}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
