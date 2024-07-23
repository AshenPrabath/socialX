import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import NewPost from './Pages/newPost';
import PostDetail from './Components/postDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/post/:id" element={<PostDetail  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
