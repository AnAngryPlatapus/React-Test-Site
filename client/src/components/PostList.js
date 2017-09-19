import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import PostCard from './PostCard';

const PostList = ({ posts }) => (
  <Card.Group itemsPerRow={3} >
    {posts.map(post => PostCard(post))}
  </Card.Group>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};

export default PostList;
