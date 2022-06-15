import React from 'react';

import {IWeatherInfoProps} from "../../interfaces";

const WeatherInfo: React.FC<IWeatherInfoProps> = (props) => {
    return (
        <div>
            <h1>В городе {props.state.name} сейчас {props.state.weather![0].description}</h1>
            <ul>
                <li>Температура: {props.state.main?.temp.toFixed()}°C</li>
                <li>Ощущается как: {props.state.main?.feels_like.toFixed()}°C</li>
                <li>Давление: {props.state.main?.pressure} ГПа</li>
            </ul>
        </div>
    );
};

export default WeatherInfo;