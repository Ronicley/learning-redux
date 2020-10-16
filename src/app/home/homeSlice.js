import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'home',
    initialState: {
        title: 'Home'
    },
    reducers: {
        changeTitleText: (state, action) => {
            state.title = action.payload;
        }
    }
});

export const { changeTitleText } = slice.actions;

export const selectHome = state => state.home;

export default slice.reducer;