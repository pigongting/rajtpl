/* 开源-组件 */
import React from 'react';
import { Table } from 'antd';
/* 自研-组件 */
import componentsTable from '@/components/Table/index.js';
/* 自研-样式 */
import './table.less';

export default (props) => {
  const { children, data = {}, fileds = [], loading = true, reload = () => {} } = props;

  // 表格列
  const columns = fileds.map(item => {
    if (item.render) {
      return item;
    }

    item.render = (text, record, index) => {
      if (item.type) {
        const ComponentName = componentsTable[item.type];
        if (ComponentName) {
          return <ComponentName text={text} record={record} index={index} />
        }
        return text;
      }
      return text;
    }
    return item;
  });

  // 分页
  const pagination = {
    total: data.totalRecords,
    current: data.pageIndex === undefined ? 1 : data.pageIndex + 1,
    pageSize: data.pageSize,
    showSizeChanger: false,
    showTotal: (total, range) => `${range[0]}/${range[1]}，共 ${total} 条`,
  };

  return (
    <div className="list-table-layout">
      <div className="list-table-layout-operations">
        {children}
      </div>
      <div className="list-table">
        <Table
          rowKey="id"
          dataSource={data.entities}
          columns={columns}
          loading={loading}
          pagination={pagination}
          onChange={(pagination, filters, sorter) => reload({ pageindex: pagination.current - 1 })}
        />
      </div>
    </div>
  );
}