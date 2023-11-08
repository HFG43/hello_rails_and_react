import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './slices/greetingsSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;