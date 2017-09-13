import { takeEvery, call, put } from 'redux-saga/effects';
import { createPost, findPosts, getPost } from './api';

import {
  receiveRecentPosts,
  receivePost,
  receiveMyPosts,
  REQUEST_RECIPE,
  REQUEST_RECENT_RECIPES,
  REQUEST_MY_RECIPES,
  REQUEST_CREATE_RECIPE,
} from './actions';

function* callRecentPosts({ payload }) {
  const posts = yield call(findPosts, payload);
  yield put(receiveRecentPosts(posts.data));
}

export function* recentPostsSaga() {
  yield takeEvery(REQUEST_RECENT_RECIPES, callRecentPosts);
}

function* callCreatePost({ payload: { redirect, data } }) {
  const post = yield call(createPost, data);
  // eslint-disable-next-line
  redirect(post._id);
}

export function* addPostSaga() {
  yield takeEvery(REQUEST_CREATE_RECIPE, callCreatePost);
}

function* callPost({ payload }) {
  const post = yield call(getPost, payload);
  yield put(receivePost(post));
}

export function* postSaga() {
  yield takeEvery(REQUEST_RECIPE, callPost);
}

function* callMyPosts({ payload }) {
  const myPosts = yield call(findPosts, payload);
  yield put(receiveMyPosts(myPosts.data));
}

export function* myPostsSaga() {
  yield takeEvery(REQUEST_MY_RECIPES, callMyPosts);
}
