import React, { useState } from 'react';
import {
    HomeOutlined,
    UserOutlined,
    AliwangwangOutlined,
    CodepenOutlined,
    ProductOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: <Link to={"/home"}>Home</Link>,
        key: 'home',
        icon: <HomeOutlined />
    },
    {
        label: <Link to={"/users"}>User</Link>,
        key: 'user',
        icon: <UserOutlined />
    },
    {
        label: 'Student',
        key: 'student',
        icon: <AliwangwangOutlined />
    },
    {
        label: 'Subject',
        key: 'subject',
        icon: <CodepenOutlined />
    },
    {
        label: 'More',
        key: 'more',
        icon: <ProductOutlined />
    },

];

const HeaderAdmin: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
};

export default HeaderAdmin;