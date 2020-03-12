import React from 'react';
import { UpOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default function documentation() {
    return (
        <div>
            <Layout>
                <Sider className="site-layout-background" width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <Menu.Item key="1">Homepage</Menu.Item>
                        <Menu.Item key="2">Detailed Page</Menu.Item>
                        <Menu.Item key="3">Wishlist</Menu.Item>
                    </Menu>
                </Sider>
                <Content className="site-layout-background">Content</Content>
            </Layout>
        </div>)
}