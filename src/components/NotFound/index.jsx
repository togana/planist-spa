import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DevTools from '../../utils/DevTools';

class NotFound extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>top</Link>
        <Link to={'/notfound'}>notfound</Link>
        {(process.env.NODE_ENV === 'production') ? null : <DevTools />}
      </div>
    );
  }
}

module.exports = NotFound;
