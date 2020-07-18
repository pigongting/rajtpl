import React, { Fragment, useEffect, useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import classNames from 'classnames';

import { ConfigProvider, Layout, Menu } from 'antd';
import { Button, DatePicker } from 'antd';
import { Tooltip, Avatar, Tag, Spin } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './index.less';


import SiderMenu from '@/layouts/SiderMenu';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import PageLoading from '@/layouts/PageLoading';

import TableList from '@/pages/demo/list/table-list';

const { Content } = Layout;



const routes = [
    {
        path: "/",
        exact: true,
        // sidebar: () => <div>home!</div>,
        // main: () => <h2>Home</h2>
        // component: () => <h2>Home</h2>
        component: () => (
            <>
                <h2>Home</h2>
                <Button type="primary">PRESS ME</Button>
                <DatePicker />
            </>
        )
    },
    {
        path: "/bubblegum",
        // sidebar: () => <div>bubblegum!</div>,
        // main: () => <h2>Bubblegum</h2>
        component: () => <h2>Bubblegum</h2>
    },
    {
        path: "/shoelaces",
        // sidebar: () => <div>shoelaces!</div>,
        // main: () => <h2>Shoelaces</h2>
        component: () => <h2>Shoelaces</h2>
    },
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function Sandwiches() {
    return <h2>Sandwiches</h2>;
}

function Tacos({ routes }) {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li>
                    <Link to="/tacos/bus">Bus</Link>
                </li>
                <li>
                    <Link to="/tacos/cart">Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </div>
    );
}

function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}


const genLayoutStyle = {
    // paddingLeft: siderMenuDom
    //   ? paddingLeft  // getPaddingLeft(!!hasLeftPadding, collapsed, siderWidth)
    //   : undefined,
    // paddingLeft: 80,
    position: 'relative',
};


const BasicLayout = props => {

    const {
        dispatch,
        children,
        settings,
        location = { pathname: '/' }
    } = props;

    useEffect(() => {
        if (dispatch) {
            dispatch({
                type: 'user/fetchCurrent',
            });
        }
    }, []);

    const handleMenuCollapse = payload => {
        if (dispatch) {
            dispatch({
                type: 'global/changeLayoutCollapsed',
                payload,
            });
        }
    };

    

    

    // triggerResizeEvent = () => {
    //     if (isBrowser()) {
    //         const event = document.createEvent('HTMLEvents');
    //         event.initEvent('resize', true, false);
    //         window.dispatchEvent(event);
    //     }
    // };

    // toggle = () => {
    //     const {
    //         collapsed,
    //         onCollapse
    //     } = this.props;

    //     if (onCollapse) onCollapse(!collapsed);
    //     this.triggerResizeEvent();
    // };

    

    // gen className
  const className = classNames(
    props.className,
    'ant-design-pro',
    'ant-pro-basicLayout',
    {
    //   [`screen-${colSize}`]: colSize,
    //   'ant-pro-basicLayout-topmenu': PropsLayout === 'topmenu',
    //   'ant-pro-basicLayout-is-children': isChildrenLayout,
    //   'ant-pro-basicLayout-fix-siderbar': fixSiderbar,
    //   'ant-pro-basicLayout-mobile': isMobile,
    },
  );

    return (
        <div className={className}>
            <Layout
                style={{
                    minHeight: '100%',
                    // ...style,
                }}
                hasSider
            >

                <SiderMenu />
                

                <Layout style={genLayoutStyle}>

                    <Header />

                    {/* <WrapContent
                        className={contentClassName}
                        isChildrenLayout={isChildrenLayout}
                        {...rest}
                        style={contentStyle}
                    >
                        {loading ? <PageLoading /> : children}
                    </WrapContent> */}
                    <Content className="ant-pro-basicLayout-content ant-pro-basicLayout-has-header">
                        <ConfigProvider
                            getPopupContainer={() => {
                                // if (isChildrenLayout && this.ref) {
                                //     return this.ref;
                                // }
                                return document.body;
                            }}
                        >
                            <div
                                // ref={ele => {
                                //     this.ref = ele;
                                // }}
                                className="ant-pro-basicLayout-children-content-wrap"
                            >
                                <Route path='/list/table-list' component={TableList}></Route>
                                {children}
                            </div>
                        </ConfigProvider>
                    </Content>
                    
                    <Footer />

                </Layout>

            </Layout>
        </div>
    );

};

export default BasicLayout;

// export default connect(({ global, settings }) => ({
//     collapsed: global.collapsed,
//     settings,
// }))(BasicLayout);

                    // <Switch>
                    //     {routes.map((route, i) => (
                    //         <RouteWithSubRoutes key={i} {...route} />
                    //     ))}
                    // </Switch>