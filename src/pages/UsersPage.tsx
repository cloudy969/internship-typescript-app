import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchUsers} from "../store/reducers/usersSlice";
import UsersList from "../components/UsersList/UsersList";
import Loader from "../UI/Loader/Loader";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.users)
    const location = useLocation();
    const pageNumber = Number(location.search?.substring(6)) || 1

    useEffect(() => {
        dispatch(fetchUsers(pageNumber))
    }, [])

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <h1>{error && 'Oops! something go wrong!'}</h1>
    }

    return (
        <div>
            <UsersList
                perPage={users.per_page}
                total={users.total}
                currentPage={users.page}
                users={users.data!}
            />
        </div>
    );
};

export default UsersPage;