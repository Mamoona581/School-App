import { configureStore } from '@reduxjs/toolkit';
import admissionReducer from './AdmissionForm/admissionSlice';

const store = configureStore({
  reducer: {
    admissionPage: admissionReducer,
  },
});

export default store;
