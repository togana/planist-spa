import { connect } from 'react-redux';

import NotFound from '../../components/NotFound';

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
)(NotFound);
