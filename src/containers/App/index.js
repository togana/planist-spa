import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as exsampleAction from '../../actions/exsample';
import App from '../../components/App';

function mapStateToProps(state) {
  return state.exsample;
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAction: bindActionCreators(exsampleAction, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
