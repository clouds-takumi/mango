import React, { ReactElement } from 'react';
import { HomeOutlined, ChromeOutlined } from '@ant-design/icons';

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
        name: '主页',
        icon: <HomeOutlined />,
    },
    {
        key: 'table',
        title: 'homepage',
        name: '表格',
        icon: <ChromeOutlined />,
    },
];
export default menuData;
