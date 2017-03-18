import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <nav>
        <Link to={'/'}>トップページ</Link>
        <Link to={'/notfound'}>存在しないページ</Link>
      </nav>
    );
  }
}

export default Footer;
