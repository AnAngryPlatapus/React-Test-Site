import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestRecentPosts } from '../../modules/post/actions';

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestRecentPosts,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
