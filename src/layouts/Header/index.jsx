
import React, { 
	// Fragment, useEffect, useState, 
	useCallback } from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';
// https://github.com/react-component/resize-observer
// import ResizeObserver from 'rc-resize-observer';

import {
	// AppstoreOutlined,
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	// PieChartOutlined,
	// DesktopOutlined,
	// ContainerOutlined,
	// MailOutlined,
	// CopyrightOutlined,
	// GithubOutlined,
	UserOutlined,
	SettingOutlined,
	LogoutOutlined,
	QuestionCircleOutlined,
	BellOutlined
} from '@ant-design/icons';
import { Layout, Menu, Dropdown, Avatar, Badge, 
	// Tooltip, Tag, Spin, Button, DatePicker
} from 'antd';

// import HeaderSearch from '@/components/HeaderSearch';
// import SelectLang from '@/components/SelectLang';

import './index.less';

const { 
	// Sider, 
	Header 
} = Layout;

const menu = (
	<Menu className="antd-pro-components-global-header-index-menu">
		<Menu.Item>
			<Link to="/"><UserOutlined />个人中心</Link>
		</Menu.Item>
		<Menu.Item>
			<Link to="/"><SettingOutlined />个人设置</Link>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item>
			<Link to="/"><LogoutOutlined />退出登录</Link>
		</Menu.Item>
	</Menu>
);

// {/* /layouts/BasicLayout.jsx -> /layouts/Header/index.jsx -> */ }
const HeaderWrapper = (props) => {

	const {
		className: propsClassName,
		collapsed,
		// siderWidth = 256,
		onCollapsed,
	} = props;

	const onClick = useCallback(() => {
		onCollapsed(!collapsed);
	}, [onCollapsed, collapsed]);

	// const [rightSize, setRightSize] = useState('auto');

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
				width: '100%',
				zIndex: 9,
				right: undefined,
				// ...style,
			}}
			className={className}
		>

			{/* GlobalHeader */}
			{/* <div className={className} style={style}> */}
			<div className="ant-pro-global-header ant-pro-global-header-layout-side" >
				{/* {isMobile && renderLogo(menuHeaderRender, logoDom)} */}
				{/* {this.renderCollapsedButton()} */}
				{/* <span className="ant-pro-global-header-trigger" onClick={this.toggle}> */}
				<span className="ant-pro-global-header-trigger" onClick={onClick}>
					{/* {collapsedButtonRender(collapsed)} */}
					{ collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
				</span>
				<div style={{ flex: 1 }} />
				{/* {rightContentRender && rightContentRender(this.props)} */}
				<div className="antd-pro-components-global-header-index-right">
					<span className="antd-pro-components-global-header-index-action"><QuestionCircleOutlined /></span>
					<Dropdown overlay={menu}>
						<span className="antd-pro-components-global-header-index-action antd-pro-components-notice-icon-index-noticeButton">
							<Badge count={11} className="antd-pro-components-notice-icon-index-badge">
								<BellOutlined className="antd-pro-components-notice-icon-index-icon" />
							</Badge>
						</span>
					</Dropdown>
					<Dropdown overlay={menu}>
						<span className="antd-pro-components-global-header-index-action antd-pro-components-global-header-index-account">
							<Avatar size="small" className="antd-pro-components-global-header-index-avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="avatar" />
							<span className="antd-pro-components-global-header-index-name anticon">Serati Ma</span>
						</span>
					</Dropdown>
				</div>
			</div>


		</Header>
	);

};


export default HeaderWrapper;