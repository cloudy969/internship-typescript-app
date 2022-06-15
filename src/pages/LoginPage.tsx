import React from 'react';
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";

import {useAppDispatch} from "../hooks";
import {isAuth} from "../store/reducers/isAuthSlice";
import {IFormData} from "../interfaces";
import {authAPI} from "../api/authAPI";
import GoogleAuth from "../components/GoogleAuth/GoogleAuth";
import CustomAntdForm from "../UI/CustomAntdForm/CustomAntdForm";

const LoginPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const mutation = useMutation(async (data: IFormData) => await authAPI.signIn(data), {
        onSuccess: (data) => {
            localStorage.setItem('token', JSON.stringify(data.token))
            dispatch(isAuth.actions.setAuth(true))
            navigate('/welcome')
        }
    })

    const onLogin = async (data: IFormData) => {
        mutation.mutate(data)
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>Sign In</h1>
            <CustomAntdForm sendData={onLogin}/>
            <hr style={{width: 480}}/>
            <p>or</p>
            <GoogleAuth/>
        </div>
    );
};

export default LoginPage;