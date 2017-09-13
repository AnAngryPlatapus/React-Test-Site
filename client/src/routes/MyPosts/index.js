
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestMyPosts } from '../../modules/post/actions';

function mapStateToProps(state) {
  return {
    myPosts: state.myPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestMyPosts,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
