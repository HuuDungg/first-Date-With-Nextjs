import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useEffect, useState } from 'react';

const UserTable = () => {
    interface DataType {
        id: number,
        id_role: number,
        is_active: boolean,
        name: string,
        password: string,
        sdt: string
    }

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'Name',
        },
        {
            title: 'Sdt',
            dataIndex: 'sdt',
            key: 'Sdt',
        },
        {
            title: 'Role',
            dataIndex: 'id_role',
            key: 'Role',
            render: (_, record) => (
                <div>{record.id_role === 1 ? "User" : "Admin"}</div>
            )
        },
        {
            title: 'Activate',
            dataIndex: 'is_active',
            key: 'Activate',
            render: (_, record) => (
                <div>{record.is_active ? "Activate" : "inActivate"}</div>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Detail</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];



    const [userList, setUserList] = useState([])

    useEffect(() => {
        const loadUsers = async () => {
            const res = await fetch("http://127.0.0.1:8080/getAllUser", {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzcwNDg2NCwianRpIjoiNTM2Mjc0ODktMzBjOS00NGEzLWIzMDYtYjViZWU5MDgwNzRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6NCwicm9sZSI6Mn0sIm5iZiI6MTcyMzcwNDg2NCwiY3NyZiI6IjMzZTA3NDU3LTEzMTEtNDQwYS1hNjMzLTQ5NmUwZWJlMGJhZSIsImV4cCI6MTcyMzcwNjY2NH0.zKcSjS7m4Yh22RP5vEEK2jPKmrvF8ix4Xjx7ZAYxbo4',
                    'Host': 'api.producthunt.com'
                }
            })
            const dataRes = await res.json()
            setUserList(dataRes.listUser)

        }
        loadUsers()
    }, [])

    return (<Table columns={columns} dataSource={userList} />)
}

export default UserTable