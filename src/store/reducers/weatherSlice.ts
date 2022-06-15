import {createSlice} from "@reduxjs/toolkit";
import {IWeatherState} from "../../interfaces";

const initialState: IWeatherState = {}

export const weather = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setWeather: (state, action) => state = action.payload
    }
})