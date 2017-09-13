import { createAction } from 'redux-actions';

export const REQUEST_RECENT_RECIPES = 'REQUEST_RECENT_RECIPES';
export const RECEIVE_RECENT_RECIPES = 'RECEIVE_RECENT_RECIPES';
export const REQUEST_CREATE_RECIPE = 'REQUEST_CREATE_RECIPE';
export const REQUEST_RECIPE = 'REQUEST_RECIPE';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';
export const REQUEST_MY_RECIPES = 'REQUEST_MY_RECIPES';
export const RECEIVE_MY_RECIPES = 'RECEIVE_MY_RECIPES';

export const requestRecentPosts = createAction(REQUEST_RECENT_RECIPES);
export const receiveRecentPosts = createAction(RECEIVE_RECENT_RECIPES);
export const requestCreatePost = createAction(REQUEST_CREATE_RECIPE);
export const requestPost = createAction(REQUEST_RECIPE);
export const receivePost = createAction(RECEIVE_RECIPE);
export const requestMyPosts = createAction(REQUEST_MY_RECIPES);
export const receiveMyPosts = createAction(RECEIVE_MY_RECIPES);
