import React from 'react';

const spinner = (props) => {
    return (
      <div class="spinner-border" style={{marginLeft: "auto", marginRight: "auto", marginBottom: "20px"}} role="status">
        <span class="sr-only">Loading...</span>
      </div>
    );
}

export default spinner;