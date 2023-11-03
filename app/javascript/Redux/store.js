import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './Slices/greetingsSlice';

const store = configureStore({
    reducer: {
      greetings: greetingsReducer,      
    },
});

export default store;