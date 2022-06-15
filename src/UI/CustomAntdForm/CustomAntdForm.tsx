import React from 'react';
import {Button, Form, Input} from "antd";
import {useForm, Controller, SubmitHandler} from "react-hook-form";

import {ICustomFormProps, IFormData} from "../../interfaces";
import style from './CustomAntdForm.module.css'

const CustomAntdForm: React.FC<ICustomFormProps> = ({sendData}) => {
    const {control, handleSubmit} = useForm<IFormData>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<IFormData> = (data) => {
        sendData(data)
    }

    return (
        <Form className={style.form} onSubmitCapture={handleSubmit(onSubmit)}>
            <Controller
                name={'email'}
                control={control}
                render={({field}) =>
                    <Input
                        className={style.input}
                        type={'email'}
                        {...field}
                        placeholder={'Enter your email'}
                    />}
            />

            <Controller
                name={'password'}
                control={control}
                render={({field}) =>
                    <Input
                        className={style.input}
                        type={'password'}
                        {...field}
                        placeholder={'Enter your password'}
                    />}
            />

            <Button
                type="primary"
                htmlType="submit"
            >
                Submit
            </Button>
        </Form>
    );
};

export default CustomAntdForm;