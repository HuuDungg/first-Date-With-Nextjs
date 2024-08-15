import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useEffect } from 'react';

const UserTable = () => {
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];

    useEffect(() => {
        const loadUsers = async () => {
            const res = await fetch("http://127.0.0.1:8080/getAllItems", {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMzcwNDg2NCwianRpIjoiNTM2Mjc0ODktMzBjOS00NGEzLWIzMDYtYjViZWU5MDgwNzRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6NCwicm9sZSI6Mn0sIm5iZiI6MTcyMzcwNDg2NCwiY3NyZiI6IjMzZTA3NDU3LTEzMTEtNDQwYS1hNjMzLTQ5NmUwZWJlMGJhZSIsImV4cCI6MTcyMzcwNjY2NH0.zKcSjS7m4Yh22RP5vEEK2jPKmrvF8ix4Xjx7ZAYxbo4',
                    'Host': 'api.producthunt.com'
                }
            })
            const data = res.json()

            console.log("check data ", data)
        }
        loadUsers()
    }, [])

    return (<Table columns={columns} dataSource={data} />)
}

export default UserTable