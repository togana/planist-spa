import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>top</Link>
        <Link to={'/notfound'}>notfound</Link>
      </div>
    );
  }
}

export default NotFound;
