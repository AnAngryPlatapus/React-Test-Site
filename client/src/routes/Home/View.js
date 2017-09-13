import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import PostList from '../../components/PostList';

export default class Home extends Component {

  componentWillMount() {
    this.props.requestRecentPosts({
      query: { $sort: { createdAt: -1 } },
    });
  }

  render() {
    return (
      <div>
        <Divider />
        <PostList posts={this.props.posts} />
      </div>
    );
  }
}

Home.defaultProps = {
  requestRecentPosts: () => ({}),
  posts: [],
};

Home.propTypes = {
  requestRecentPosts: PropTypes.func,
  posts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};
