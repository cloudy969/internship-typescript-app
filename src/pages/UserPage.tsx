import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchUserById} from "../store/reducers/userSlice";
import style from '../styles/UserPage.module.css'
import Loader from "../UI/Loader/Loader";

const UserPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const {isLoading, user, error} = useAppSelector(state => state.user)
    const params = useParams();

    useEffect(() => {
        dispatch(fetchUserById(Number(params.id)))
    }, [])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <h1>Oops! Something went wrong!</h1>
    }

    return (
        <div className={style.wrapper}>
            <img className={style.avatar} src={user?.avatar} alt="avatar"/>
            <p className={style.name}>{user?.first_name} {user?.last_name}</p>
            <p>{user?.email}</p>
        </div>
    );
};

export default UserPage;