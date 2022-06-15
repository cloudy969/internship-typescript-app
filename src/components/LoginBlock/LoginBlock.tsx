import React from 'react';
import {Button} from "antd";
import {NavLink} from "react-router-dom";

import style from './LoginBlock.module.css'

const LoginBlock: React.FC = () => {

    return (
        <div className={style.wrapper}>
            <Button type={'primary'}>
                <NavLink to='/registration'>
                    Sign Up
                </NavLink>
            </Button>
            <Button type={'primary'}>
                <NavLink to='/login'>
                    Sign In
                </NavLink>
            </Button>
        </div>
    );
};

export default LoginBlock;