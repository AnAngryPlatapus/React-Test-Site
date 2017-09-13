import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import superagent from 'superagent';
import feathers from 'feathers-client';
import rest from 'feathers-rest/client';
import auth from 'feathers-authentication-client';
import { fork, all } from 'redux-saga/effects';

import { currPost, myPosts, posts } from './post/reducers';
import * as postSagas from './post/sagas';
import { user } from './user/reducers';
import * as userSagas from './user/sagas';

/*
userSagas = {
  loginSaga: () =>,
  signupSaga: () =>,
}
*/

export const rootReducer = combineReducers({
  currPost,
  myPosts,
  posts,
  user,
  router: routerReducer,
});

export function* rootSaga() {
  yield all([
    ...Object.values(userSagas),
    ...Object.values(postSagas),
  ].map(fork));
}

const host = 'http://localhost:3030';
export const app = feathers()
  .configure(rest(host).superagent(superagent))
  .configure(feathers.hooks())
  .configure(auth({ storage: window.localStorage }));

export const usersService = app.service('users');
export const postsService = app.service('posts');
