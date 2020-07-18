
import React, { Fragment, useEffect, useState } from 'react';

import classNames from 'classnames';
// https://github.com/react-component/resize-observer
import ResizeObserver from 'rc-resize-observer';

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    CopyrightOutlined,
    GithubOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Button, DatePicker } from 'antd';
import { Tooltip, Avatar, Tag, Spin } from 'antd';



import HeaderSearch from '@/components/HeaderSearch';
import SelectLang from '@/components/SelectLang';

import './index.less';

const { Sider, Header } = Layout;


{/* /layouts/BasicLayout.jsx -> /layouts/Header/index.jsx -> */ }
const HeaderWrapper = (props) => {

    const {
        className: propsClassName,
        collapsed,
        siderWidth = 256,

    } = props;

    const [rightSize, setRightSize] = useState('auto');

    const className = classNames(propsClassName, {
        // 'ant-pro-fixed-header': fixedHeader,
        // 'ant-pro-top-menu': isTop,
      });

    return (


        <Header
            style={{
                padding: 0,
                // width: needSettingWidth
                //     ? `calc(100% - ${collapsed ? 80 : siderWidth}px)`
                //     : '100%',
                width: `calc(100% - ${collapsed ? 80 : siderWidth}px)`,
                zIndex: 9,
                right: undefined,
                // ...style,
            }}
            className={className}
        >

            {/* GlobalHeader */}
            {/* <div className={className} style={style}> */}
            <div className={className} >
                {/* {isMobile && renderLogo(menuHeaderRender, logoDom)} */}
                {/* {this.renderCollapsedButton()} */}
                {/* <span className="ant-pro-global-header-trigger" onClick={this.toggle}> */}
                <span className="ant-pro-global-header-trigger">
                    {/* {collapsedButtonRender(collapsed)} */}
                    { collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                </span>
                <div style={{ flex: 1 }} />
                {/* {rightContentRender && rightContentRender(this.props)} */}
            </div>


        </Header>
    );

};


export default HeaderWrapper;