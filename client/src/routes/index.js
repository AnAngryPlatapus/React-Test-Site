import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
} from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';

import Home from './Home';
import SinglePost from './SinglePost';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import AddPost from './AddPost';
import MyPosts from './MyPosts';
import requireAuthentication from '../components/Auth';
import getUser from '../components/GetUser';
import NavBar from '../components/NavBar';

export default () => (
  <BrowserRouter>
    <Container>
      <Header as="h1" textAlign="left">
        <Link to="/">SideShare</Link>
      </Header>
      <Route path="/" render={props => (<NavBar {...props} />)} />
      <Route exact path="/" component={getUser(Home)} />
      <Route path="/view/:postId" render={props => (<SinglePost {...props} />)} />
      <Route path="/login" render={props => (<LoginPage {...props} />)} />
      <Route path="/signup" render={props => (<SignupPage {...props} />)} />
      <Route path="/posts/add" component={requireAuthentication(AddPost)} />
      <Route path="/profile/posts" component={requireAuthentication(MyPosts)} />
    </Container>
  </BrowserRouter>
);
