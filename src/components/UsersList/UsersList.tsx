import React from 'react';
import {useNavigate} from "react-router-dom";
import {Table} from "antd";
import {ColumnsType} from "antd/es/table";

import {useAppDispatch} from "../../hooks";
import {fetchUsers} from "../../store/reducers/usersSlice";
import {IUser, IUsersListProps} from "../../interfaces";
import style from './UsersList.module.css'

const UsersList: React.FC<IUsersListProps> = ({users, total, perPage, currentPage}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const columns: ColumnsType<IUser> = [
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: avatar => <img className={style.avatar} src={avatar}/>,
        },
        {
            title: 'First name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        },
    ];

    const data: IUser[] = users;
    return (
        <Table
            columns={columns}
            dataSource={data}
            onRow={(record: IUser, rowIndex) => {
                return {onClick: () => navigate(`/user/${record.id}`)}
            }}
            pagination={{
                simple: true,
                current: currentPage,
                total: total,
                pageSize: perPage,
                onChange: (pageNumber) => {
                    if (pageNumber !== 1) {
                        navigate(`/users?page=${pageNumber}`)
                    } else {
                        navigate('/users')
                    }
                    dispatch(fetchUsers(pageNumber))
                }
            }}
        />
    );
};

export default UsersList;