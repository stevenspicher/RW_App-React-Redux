import { getPosts, createPost, updatePost, deletePost } from '../state/postListSlice/postListSlice';
import * as api from '../api/index.js';

export const retrievePosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch(getPosts(data));
  } catch (error) {
    console.log(error);
  }
};

export const createNewPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch(createPost(data));
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch(updatePost(data));
  } catch (error) {
    console.log(error);
  }
};

export const removePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch(deletePost(id));
  } catch (error) {
    console.log(error);
  }
};