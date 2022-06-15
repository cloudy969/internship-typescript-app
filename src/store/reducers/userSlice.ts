import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersAPI} from "../../api/usersAPI";
import {IUserState} from "../../interfaces";

const initialState: IUserState = {
    isLoading: false,
    error: null
}

export const fetchUserById = createAsyncThunk(
    'user/fetchUserById',
    async (id: number) => {
        const response = await usersAPI.getUserById(id)
        return response.data
    }
)

export const user = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.user = action.payload
                state.isLoading = false
            })
            .addCase(fetchUserById.rejected, (state, action) => {
              state.error = action.error
              state.isLoading = false
            })
    }
})