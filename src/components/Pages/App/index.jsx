import React, { Component, PropTypes } from 'react';
import TemplateDefault from '../../Templates/Default';

class App extends Component {
  render() {
    const { isAction, toggleAction } = this.props;
    return (
      <TemplateDefault>
        <div>
          <h1>isAction: {isAction.toString()}</h1>
          <button onClick={toggleAction.toggle}>
            toggle
          </button>
        </div>
      </TemplateDefault>
    );
  }
}

App.propTypes = {
  isAction: PropTypes.bool.isRequired,
  toggleAction: PropTypes.object.isRequired,
};

export default App;
