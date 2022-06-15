import React from 'react';
import {useNavigate} from "react-router-dom";
import {GoogleLogin} from "@react-oauth/google";

import {useAppDispatch} from "../../hooks";
import {isAuth} from "../../store/reducers/isAuthSlice";
import style from './GoogleAuth.module.css'

const GoogleAuth = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className={style.wrapper}>
            <GoogleLogin
                onSuccess={response => {
                    localStorage.setItem('token', JSON.stringify(response.credential));
                    dispatch(isAuth.actions.setAuth(true));
                    navigate('/welcome')
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                useOneTap
                theme={'filled_blue'}
            />
        </div>
    );
};

export default GoogleAuth;