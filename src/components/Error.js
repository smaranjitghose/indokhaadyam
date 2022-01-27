import React from 'react';
import '../styles/error.css'

function Error(props) {
  return <div id='container'>
      <div className="content">
          <h2>404</h2>
          <h4>Oops! Page Not Found</h4>
          <a href="#">&#8592; Go To Home</a>
      </div>
  </div>;
}

export default Error;
