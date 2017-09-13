import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestCreatePost } from '../../modules/post/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCreatePost,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
