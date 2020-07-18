/* 开源-组件 */
import React from 'react';
/* 自研-样式 */
import './actions.less';

export default (props) => {
  const { actions = [] } = props;

  return (
    <div className="list-actions-layout">
      <ul className="list-actions-list">
        {actions.map((item, index) => <li key={index} className="list-actions-item">{item}</li>)}
      </ul>
    </div>
  );
}
