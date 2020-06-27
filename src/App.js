import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import LoadPost from "./Components/LoadPost/loadPost";
import Post from "./Components/Post/post";
import Comments from "./Components/Comments/comments";
import Modal from "./Components/UI/Modal/modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: {},
      currentComment: [],
      id: 0,
      load: false,
    };
    this.randomId();
  }

  randomId = () => {
    this.showModal();
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            currentComment: response.data.splice(
              Math.floor(Math.random() * Math.floor(495)),
              5
            ),
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState((prevState) => {
          return {
            ...prevState,
            currentPost:
              response.data[Math.floor(Math.random() * Math.floor(99))],
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.showModal();
  };

  showModal = () => {
    this.setState((prevState) => {
      return {
        load: !prevState.load,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <LoadPost LoadPost={() => this.randomId} />
        <Post post={this.state.currentPost} />
        <Comments comment={this.state.currentComment} />
        <Modal show={this.state.load} />
      </div>
    );
  }
}

export default App;
