import React from 'react';
import {NavLink} from "react-router-dom";
import {Button, Result} from "antd";

const SuccessPage = () => {
    return (
        <Result
            status="success"
            title="Successfully registration!"
            extra={[
                <Button type="primary" key="login">
                    <NavLink to='/login'>
                        Sign In
                    </NavLink>
                </Button>,
            ]}
        />
    );
};

export default SuccessPage;