import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "antd";

import {useAppDispatch} from "../../hooks";
import {isAuth} from "../../store/reducers/isAuthSlice";
import style from './LogoutBlock.module.css'

const LogoutBlock: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = (): void => {
        localStorage.removeItem('token')
        dispatch(isAuth.actions.setAuth(false))
        navigate('/login')
    }

    return (
        <Button className={style.btn} onClick={handleLogout} type={'primary'}>
            Logout
        </Button>
    );
};

export default LogoutBlock;