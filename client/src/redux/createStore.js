import { combineReducers, configureStore } from '@reduxjs/toolkit';
import roomsReducer from './slices/roomsSlice';
import booked from './bookedSlice';
import usersReducer from './slices/userSlice';
import reviewsReducer from './slices/reviewSlice';

const rootReducer = combineReducers({
    users: usersReducer,
    rooms: roomsReducer,
    reviews: reviewsReducer,
    booked,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
