import React from 'react';
import './comments.css';

const comments = (props) => {
    return (
      <div className="ui mini Comments">
        <h3 className="Header-comments">Comments</h3>
        <div className="Comment">
          <div className="Content-comments">
            <a className="Author">sit et quis</a>
            <div className="Metadata">
              <span>Raheem_Heaney@gretchen.biz</span>
            </div>
            <div className="Text">
              aut vero est dolor non aut excepturi dignissimos illo nisi aut
              quas aut magni quia nostrum provident magnam quas modi maxime
              voluptatem et molestiae
            </div>
          </div>
        </div>
      </div>
    );
}

export default comments;