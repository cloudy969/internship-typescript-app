import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {Menu} from "antd";
import type {MenuProps} from "antd";

import style from './Navbar.module.css'

const Navbar: React.FC = () => {
    const location = useLocation();

    const items: MenuProps['items'] = [
        {
            label: (
                <NavLink to="/users">
                    Users
                </NavLink>
            ),
            key: '/users',
        },
        {
            label: (
                <NavLink to="/weather">
                    Weather
                </NavLink>
            ),
            key: '/weather',
        },
        {
            label: (
                <NavLink to="/calculator">
                    Calculator
                </NavLink>
            ),
            key: '/calculator',
        },
    ];

    return (
        <nav className={style.nav}>
            <Menu selectedKeys={[location.pathname]} mode="horizontal" items={items} />
        </nav>
    );
};

export default Navbar;