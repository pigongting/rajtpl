/* 开源-组件 */
import React from 'react';
/* 自研-样式 */
import './index.less';

export default (props) => {
  const { children, title, crumbs } = props;

  return (
    <div className="list-layout">
      {crumbs === undefined && 
        <div className="list-layout-head">
          <div className="list-layout-head-back">返回</div>
          <div className="list-layout-head-slash">/</div>
          <div className="list-layout-head-title">{title}</div>
        </div>
      }
      <div className="list-layout-body">{children}</div>
    </div>
  );
};