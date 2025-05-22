import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers'; 
// import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Optional: if you're dealing with non-serializable data like FormData
    }),
});

export default store;
