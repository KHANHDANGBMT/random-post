import React,{memo} from 'react';
import './comments.css';

const comments = (props) => {
    return (
      <div className="ui mini comments">
        <h3 className="ui dividing header">Comments</h3>
        {props.comment.map((element) => (
          <div className="comment" key={element.email}>
            <div className="content">
              <a className="author">{element.name}</a>
              <div className="metadata">
                <span>{element.email}</span>
              </div>
              <div className="text">{element.body}</div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default memo(comments);