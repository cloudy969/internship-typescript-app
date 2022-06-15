import React from 'react';
import {Button, Input} from "antd";

import {useForm, Controller} from "react-hook-form";
import {IWeatherFormData, IWeatherFormProps} from "../../interfaces";
import style from './WeatherForm.module.css'

const WeatherForm: React.FC<IWeatherFormProps> = ({sendData}) => {
    const {control, handleSubmit, watch} = useForm<IWeatherFormData>({
        defaultValues: {
            cityName: ''
        }
    })
    const inputValue = watch('cityName')

    const onSubmit = (data:IWeatherFormData) => {
        sendData(data.cityName)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={style.wrapper}>
            <Controller
                name='cityName'
                control={control}
                render={({field}) => <Input {...field} placeholder='Enter your city' className={style.input}/>}
            />

            <Button
                htmlType={'submit'}
                className={style.btn}
                type='primary'
                disabled={inputValue ? false : true}
            >
                Send
            </Button>
        </form>
    );
};

export default WeatherForm;