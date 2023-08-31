import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice';
import postSlice from './features/post/postSlice';
import allPostSlice from './features/allPost/allPostSlice';

export const store = configureStore({
    reducer: {
      user: userSlice,
      post: postSlice,
      allPost: allPostSlice,
    }
  })