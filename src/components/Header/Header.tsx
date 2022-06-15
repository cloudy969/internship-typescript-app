import React from 'react';

import {useAppSelector} from "../../hooks";
import Navbar from "../Navbar/Navbar";
import LoginBlock from "../LoginBlock/LoginBlock";
import LogoutBlock from "../LogoutBlock/LogoutBlock";
import style from './Header.module.css'

const Header: React.FC = () => {
    const state = useAppSelector(state => state.isAuth)

    return (
        <header className={style.header}>
            {
                state.value && <>
                    <Navbar/>
                    <LogoutBlock/>
                </>
            }
            {
                !state.value &&
                <LoginBlock/>
            }
        </header>
    );
};

export default Header;