import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IIsAuthState} from "../../interfaces";

const initialState: IIsAuthState = {
    value: !!localStorage.getItem('token')
}

export const isAuth = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    }
})