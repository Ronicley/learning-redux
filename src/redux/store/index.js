import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../app/counter/counterSlice';
import homeReducer from '../../app/home/homeSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
  },
});
