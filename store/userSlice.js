import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state = { ...action.payload, userAuthenticate: true };
            return state;
        }
    },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
