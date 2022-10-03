import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from '../../interfaces/UserInfo';

export const EmptyUserState: UserInfo = {
    id: 0,
    name: '',
    email: ''
} 

export const userSlice = createSlice({
    name: "user",
    initialState: EmptyUserState,
    reducers: {
        createUser: (state, action) =>{
            return action.payload;
        },
        updateUser: (state, action) =>{
            return { ...state, ...action.payload }
        },
        resetUser: () =>{
            return EmptyUserState;
        }
    }

})