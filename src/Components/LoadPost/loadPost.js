import React from "react";
import "./loadPost.css";

const loadPost = (props) => {
  return (
    <div>
      <button className="ui blue basic button" onClick={props.LoadPost()}>
        <i aria-hidden="true" className="undo icon"></i>
        <p className="Content">Loadpost</p>
      </button>
    </div>
  );
}

export default loadPost;
