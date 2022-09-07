import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: [],
};

const bookedSlice = createSlice({
    name: 'booked',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price + sum;
            }, 0);
        },
        removeItem(state, action) {
            const findItem = (state.items = state.items.filter(
                (obj) => obj._id !== action.payload,
            ));
        },
        clearItems(state) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearItems } = bookedSlice.actions;

export default bookedSlice.reducer;
