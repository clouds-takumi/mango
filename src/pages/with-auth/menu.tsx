import React, { ReactElement } from 'react';
import { HomeOutlined, ChromeOutlined, WindowsOutlined } from '@ant-design/icons';

type IMenu = {
    key: string;
    title: string;
    name: string;
    icon: ReactElement;
};

const menuData: Array<IMenu> = [
    {
        key: 'home',
        title: 'homepage',
        name: 'home',
        icon: <HomeOutlined />,
    },
    {
        key: 'button',
        title: 'button',
        name: 'button',
        icon: <WindowsOutlined />,
    },
    {
        key: 'table',
        title: 'table',
        name: 'table',
        icon: <ChromeOutlined />,
    },
];
export default menuData;
