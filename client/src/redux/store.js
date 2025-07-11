import {configureStore} from '@reduxjs/toolkit';
import UsersReducers from './slice/userSlice';

export const store = configureStore({
    reducer: {
        users: UsersReducers,
    }
});