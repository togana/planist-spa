import React, { Component } from 'react';

import TemplateDefault from '../../Templates/Default';

class NotFound extends Component {
  render() {
    return (
      <TemplateDefault>
        <p>
          存在しないページ
        </p>
      </TemplateDefault>
    );
  }
}

export default NotFound;
