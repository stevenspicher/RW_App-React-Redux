import { configureStore } from '@reduxjs/toolkit';
import postListReducer from '../postListSlice/postListSlice';
import authReducer from '../authSlice/authSlice';

export const store = configureStore({
  reducer: {
    postList: postListReducer,
    authReducer
  },
});
