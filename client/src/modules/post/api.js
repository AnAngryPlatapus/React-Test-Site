import { postsService } from '../index';

export async function findPosts(payload) {
  try {
    return await postsService.find(payload);
  } catch (err) {
    return [];
  }
}

export async function getPost(payload) {
  try {
    return await postsService.get(payload);
  } catch (err) {
    return {};
  }
}

export async function createPost(payload) {
  try {
    return await postsService.create(payload);
  } catch (err) {
    return {};
  }
}
