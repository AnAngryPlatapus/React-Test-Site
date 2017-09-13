import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestPost } from '../../modules/post/actions';

function mapStateToProps(state) {
  return {
    currPost: state.currPost,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestPost,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
