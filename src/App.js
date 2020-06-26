import React from 'react'
import './App.css';
import LoadPost from './Components/LoadPost/loadPost';
import Post from './Components/Post/post';
import Comments from './Components/Comments/comments';

function App() {
  return (
    <div className="App">
      <LoadPost />
      <Post />
      <Comments/>
    </div>
  );
}

export default App;
