import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUsers} from "../../interfaces";
import {usersAPI} from "../../api/usersAPI";

const initialState: IUsers = {
    users: {
        page: 0,
        total: 0,
        per_page: 0
    },
    isLoading: false,
    error: null,
}

export const fetchUsers = createAsyncThunk(
    'users/usersFetching',
    async (page: number) => {
        const response = await usersAPI.getUsers(page)
        return response
    })

export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                if (!state.isLoading) {
                    state.isLoading = true
                }
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                if (state.isLoading) {
                    state.isLoading = false
                    state.users = action.payload
                }
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                if (state.isLoading) {
                    state.isLoading = false
                    state.error = action.error
                }
            })
    }
})