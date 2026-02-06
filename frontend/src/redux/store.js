// Redux Store Configuration - Combines all slices
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import spacesReducer from './spacesSlice';
import bookingsReducer from './bookingsSlice';
import usersReducer from './usersSlice';

// Configure the Redux store with reducers
export const store = configureStore({
  reducer: {
    auth: authReducer,
    spaces: spacesReducer,
    bookings: bookingsReducer,
    users: use
