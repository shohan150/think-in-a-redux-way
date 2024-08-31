import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import tagsReducer from '../features/tags/tagsSlice';
import videosReducer from '../features/videos/videosSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    videos: videosReducer,
    tags: tagsReducer
  },
});
