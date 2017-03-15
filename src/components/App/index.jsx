import React, { Component, PropTypes } from 'react';
import DevTools from '../../utils/DevTools';

class App extends Component {
  render() {
    const { isAction, toggleAction } = this.props;
    return (
      <div>
        <h1>isAction: {isAction.toString()}</h1>
        <button onClick={toggleAction.toggle}>
          toggle
        </button>
        {(process.env.NODE_ENV === 'production') ? null : <DevTools />}
      </div>
    );
  }
}

App.propTypes = {
  isAction: PropTypes.bool.isRequired,
  toggleAction: PropTypes.object.isRequired,
};

module.exports = App;
