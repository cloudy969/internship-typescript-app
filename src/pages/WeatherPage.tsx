import React from 'react';
import {AxiosResponse} from "axios";
import {useMutation} from "react-query";

import {useAppDispatch, useAppSelector} from "../hooks";
import {weather} from "../store/reducers/weatherSlice";
import {IWeatherState} from "../interfaces";
import {weatherAPI} from "../api/weatherAPI";
import WeatherForm from "../components/WeatherForm/WeatherForm";
import WeatherInfo from "../components/WeatherInfo/WeatherInfo";

const WeatherPage: React.FC = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.weather)

    const mutation = useMutation(async (data: string) => await weatherAPI.getWeather(data), {
        onSuccess: (data: AxiosResponse<IWeatherState>) => {
            dispatch(weather.actions.setWeather(data))
        }
    })

    const onSend = async (data: string) => {
        mutation.mutate(data)
    }

    return (
        <div>
            <h1>Check weather by city name</h1>
            <WeatherForm sendData={onSend}/>
            {mutation.isLoading && <p>Loading...</p>}
            {state.weather && <WeatherInfo state={state}/>}
        </div>
    );
};

export default WeatherPage;