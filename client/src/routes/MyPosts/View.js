import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostList from '../../components/PostList';

export default class MyPosts extends Component {

  componentWillMount() {
    /* eslint-disable */
    this.props.requestMyPosts({
      query: {
        ownerId: this.props.user._id,
      },
    });
    /* eslint-enable */
  }

  render() {
    return (
      <PostList posts={this.props.myPosts} />
    );
  }
}

MyPosts.defaultProps = {
  requestMyPosts: () => ({}),
  user: {},
  myPosts: [],
};

MyPosts.propTypes = {
  requestMyPosts: PropTypes.func,
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
  }),
  myPosts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};
