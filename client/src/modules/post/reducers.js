import { handleAction } from 'redux-actions';
import {
  receivePost,
  receiveMyPosts,
  receiveRecentPosts,
} from './actions';

export const currPost = handleAction(receivePost, {
  next(state, { payload }) {
    return payload;
  },
}, {});

export const myPosts = handleAction(receiveMyPosts, {
  next(state, { payload }) {
    return payload;
  },
}, []);

export const posts = handleAction(receiveRecentPosts, {
  next(state, { payload }) {
    return payload;
  },
}, []);
