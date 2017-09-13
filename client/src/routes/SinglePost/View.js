import React, { Component } from 'react';
import { Header, Image, Segment, Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class SinglePost extends Component {

  componentWillMount() {
    this.props.requestPost(this.props.match.params.postId);
  }

  render() {
    const post = this.props.currPost;
    if (!Object.prototype.hasOwnProperty.call(post, 'name')) {
      return (<p>Loading...</p>);
    }

    return (
      <div>
        <Header as="h1" textAlign="center" >{post.name}</Header>
        <Image src={post.imageUrl} size="medium" centered />
        <Segment.Group>
          { /* eslint-disable */ }
          {post.instructions.map((ing, i) => <Segment key={i}>{ing}</Segment>)}
        </Segment.Group>
        <Container text>
          {post.description.split('\n').map((d, i) => <p key={i}>{d}</p>)}
          { /* eslint-enable */ }
        </Container>
      </div>
    );
  }
}

SinglePost.defaultProps = {
  requestPost: () => ({}),
  currPost: {},
};

SinglePost.propTypes = {
  requestPost: PropTypes.func,
  currPost: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      postId: PropTypes.string,
    }),
  }).isRequired,
};

