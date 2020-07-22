/* 开源-组件 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
/* 自研-组件 */
import ListLayout from '@/layouts/ListLayout';
import ListFormLayout from '@/layouts/ListLayout/form.js';
import ListTableLayout from '@/layouts/ListLayout/table.js';
import ListActionsLayout from '@/layouts/ListLayout/actions.js';
/* 自研-请求 */
import { rConfigList, rPagination } from './netapi';

export default (props) => {
  // useRequest
  const { data: config = {} } = useRequest(rConfigList);
  const { data: mainData, loading, run } = useRequest(rPagination);

  // 操作
  const actions = {
    title: '操作',
    dataIndex: '',
    render: (text, record) => (
      <ListActionsLayout
        actions={[
          <Link key="view" to={'/'}>配置</Link>,
          <Link key="delete" to={'/'}>订阅警报</Link>
        ]}
      />
    )
  };

  return (
    <ListLayout router={props} title={config.title}>
      <ListFormLayout fileds={config.form} reload={run} />
      <ListTableLayout fileds={[ ...(config.table || []), actions ]} data={mainData} loading={loading} reload={run}>
        <Link to={'/'}><Button type="primary" icon={<PlusOutlined />}>新建</Button></Link>
      </ListTableLayout>
    </ListLayout>
  )
}
