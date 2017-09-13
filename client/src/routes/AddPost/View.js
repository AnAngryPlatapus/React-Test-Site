import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class AddPost extends Component {

  constructor(props) {
    super(props);
    this.state = { nameError: false, error: false, name: '', instructions: '', description: '' };
  }

  handleImageChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  handleSubmit = (e) => {
    const name = this.state.name.trim();
    if (name === '') {
      this.setState({ nameError: true, error: true });
    } else if (this.state.imagePreviewUrl === undefined) {
      this.setState({ error: true });
    } else {
      this.props.requestCreatePost({
        redirect: id => this.props.history.push(`/view/${id}`),
        data: {
          name,
          description: this.state.description,
          instructions: this.state.instructions.split('\n'),
          imageUrl: this.state.imagePreviewUrl,
        },
      });
    }
    e.preventDefault();
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleIngredientChange = (e) => {
    this.setState({ instructions: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} error={this.state.error}>
        <Form.Field error={this.state.nameError} >
          <label>Post Name</label>
          <input value={this.state.name} name="name" onChange={e => this.setState({ name: e.target.value })} placeholder="Post Name" />
        </Form.Field>
        <Form.Field>
          <label>Post Image</label>
          <input name="image" type="file" onChange={this.handleImageChange} />
        </Form.Field>
        <Form.Field>
          <label>Instructions (one per line)</label>
          <Form.TextArea value={this.state.instructions} name="instructions" onChange={this.handleIngredientChange} placeholder="Instructions..." />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Form.TextArea value={this.state.description} name="description" onChange={this.handleDescriptionChange} placeholder="Description..." />
        </Form.Field>
        <Message
          error
          header="Error"
          content="Post name and image is required"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

AddPost.defaultProps = {
  requestCreatePost: () => ({}),
};

AddPost.propTypes = {
  requestCreatePost: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
