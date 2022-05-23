import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state = action.payload;
            AsyncStorage.setItem('userKey', JSON.stringify(state))
            return state;
        },
        logout: (state, action) => {
            state = {};
            return state;
        }
    },
});

export const { addUser, logout } = userSlice.actions;


export default userSlice.reducer;
