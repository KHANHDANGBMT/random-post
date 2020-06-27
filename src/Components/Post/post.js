import React, { PureComponent } from "react";

import { colors } from "../../theme/Color/ColorPost";

class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.post !== this.props.post ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    console.log(this.props.post);
    return (
      <div
        className={
          "ui message " +
          colors[Math.floor(Math.random() * Math.floor(colors.length))]
        }
      >
        <div className="Header-Post">{this.props.post.title}</div>
        <p className="Text-post">{this.props.post.body}</p>
      </div>
    );
  }
}

export default Post;
