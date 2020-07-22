import React, { 
    // Fragment, useEffect, useState 
} from 'react';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
} from "react-router-dom";

import {
    AppstoreOutlined,
    // MenuUnfoldOutlined,
    // MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

import logo from '@/assets/logos/logo.svg';
import './index.less';

const { Sider } = Layout;
const { SubMenu } = Menu;




// {/* /layouts/BasicLayout.jsx -> /layouts/SiderMenu/index.jsx -> /layouts/SiderMenu/SiderMenu.jsx -> BaseMenu.jsx */}
const SiderMenuWrapper = (props) => {

    const {
        onMenuHeaderClick
    } = props;

    return (

        < Sider collapsed={props.collapsed}>
            <div
                className="ant-pro-sider-menu-logo"
                onClick={onMenuHeaderClick}
                id="logo"
            >
                <Link to="/">
                    <img src={logo} alt="logo" />
                    {/* {props.collapsed ? null : <h1>{props.title}</h1>} */}
                    {props.collapsed ? null : <h1>title</h1>}
                </Link>
            </div>


            <Menu
                defaultSelectedKeys={['table-list']}
                defaultOpenKeys={['demo', 'list']}
                mode="inline"
                theme="dark"
                // inlineCollapsed={props.collapsed}
            >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    <Link to="/bubblegum">Bubblegum</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined />}>
                    <Link to="/shoelaces">Shoelaces</Link>
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                    <Menu.Item key="5">
                        <Link to="/tacos">Tacos</Link>
                    </Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="demo" icon={<AppstoreOutlined />} title="示例">
                    <SubMenu key="list" title="列表页">
                        <Menu.Item key="table-list"><Link to="/list/table-list">查询表格</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="form" title="表单页">
                        <Menu.Item key="advanced-form"><Link to="/form/advanced-form">高级表单</Link></Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </Sider >

    );
};


export default SiderMenuWrapper;


// {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
//         {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
//         </Button> */}