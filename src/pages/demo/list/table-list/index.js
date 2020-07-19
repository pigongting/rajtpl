/* 开源-组件 */
import React, { useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

export default () => {
  // useHistory
  const history = useHistory();

  // useRequest
  const { data: config = {} } = useRequest(rConfigList);
  const { data: mainData, loading, run } = useRequest(rPagination, { manual: true }); 

  // reload
  const reload = useCallback((params) => {
    run(params);
  }, [run]);

  // useEffect
  useEffect(() => {
    reload();
  }, [reload]);

  console.log(history);

  // 操作
  const actions = {
    title: '操作',
    dataIndex: '',
    render: (text, record) => (
      <ListActionsLayout
        actions={[
          <Link key="view" to={'/enterprise/view?id=' + record.id}>详情</Link>,
          <Link key="delete" to={'/enterprise/view?id=' + record.id}>删除企业</Link>
        ]}
      />
    )
  };

  return (
    <ListLayout title={config.title}>
      <ListFormLayout fileds={config.form} reload={reload} />
      <ListTableLayout fileds={[ ...(config.table || []), actions ]} data={mainData} loading={loading} reload={reload}>
        <Link to={'/'}><Button type="primary" icon={<PlusOutlined />}>新建</Button></Link>
      </ListTableLayout>
    </ListLayout>
  )
}
