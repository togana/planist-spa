import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    const { isAction, toggleAction } = this.props;
    return (
      <div>
        <h1>isAction: {isAction.toString()}</h1>
        <button onClick={toggleAction.toggle}>
          toggle
        </button>
      </div>
    );
  }
}

App.propTypes = {
  isAction: PropTypes.bool.isRequired,
  toggleAction: PropTypes.object.isRequired,
};

export default App;
