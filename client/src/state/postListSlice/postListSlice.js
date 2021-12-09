import { createSlice } from '@reduxjs/toolkit';

export const postListSlice = createSlice({
  name: 'cardList',
  initialState: {
    postList: [],
  },
  reducers: {
    getPosts: (state, action) => {
      state.postList = action.payload;
    },
    createPost: (state, action) => {
      state.postList.push(action.payload);
    },
    updatePost: (state, action) => {
      state.postList.map((post) => (post._id === action.payload._id ? action.payload : post));
    },
    deletePost: (state, action) => {
      state.postList.filter((post) => post.id !== action.payload);
    },
  }
});


export const { getPosts, createPost, updatePost, deletePost } = postListSlice.actions;
export const selectPostList = (state) => state.postList.postList;
export default postListSlice.reducer;