import React from 'react';
import {useMutation} from "react-query";
import {useNavigate} from "react-router-dom";

import {IFormData} from "../interfaces";
import {authAPI} from "../api/authAPI";
import CustomAntdForm from "../UI/CustomAntdForm/CustomAntdForm";

const RegistrationPage = () => {
    const navigate = useNavigate();

    const mutation = useMutation(async (data: IFormData) => await authAPI.signUp(data), {
        onSuccess: (response) => {
            if (response.status === 200) {
                navigate('/success')
            }
        }
    })

    const onSignUp = (data: IFormData) => {
        mutation.mutate(data)
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Sign Up</h1>
            <CustomAntdForm sendData={onSignUp} />
        </div>
    );
};

export default RegistrationPage;