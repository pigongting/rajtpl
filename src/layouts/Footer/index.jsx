import React, { Fragment, useEffect, useState } from 'react';

import {
    CopyrightOutlined,
    GithubOutlined
} from '@ant-design/icons';

import './index.less';

const FooterWrapper = (props) => {

    const {

    } = props;

    const links = [
        {
            key: 'Ant Design Pro',
            title: 'Ant Design Pro',
            href: 'https://pro.ant.design',
            blankTarget: true,
        },
        {
            key: 'github',
            title: <GithubOutlined />,
            href: 'https://github.com/ant-design/ant-design-pro',
            blankTarget: true,
        },
        {
            key: 'Ant Design',
            title: 'Ant Design',
            href: 'https://ant.design',
            blankTarget: true,
        },
    ];

    return (
        <footer className={'ant-pro-global-footer'} style={{ padding: 0 }}>
            <div className="ant-pro-global-footer-links">
                {links.map((link) => (
                    <a
                        key={link.key}
                        title={link.key}
                        target={link.blankTarget ? '_blank' : '_self'}
                        href={link.href}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
            <div className="ant-pro-global-footer-copyright">
                <Fragment>
                    Copyright <CopyrightOutlined /> 2020 <a href="http://www.edexcs.cn" target="_black">易得软件</a>出品
                    </Fragment>
            </div>
        </footer>
    );

};

export default FooterWrapper;