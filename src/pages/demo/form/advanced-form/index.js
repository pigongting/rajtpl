/* 开源-组件 */
import React from 'react';
import { useRequest } from 'ahooks';
/* 自研-组件 */
import FormLayout from '@/layouts/FormLayout';
/* 自研-请求 */
import { rConfigNew, rPost } from './netapi';

export default (props) => {
  // useRequest
  const { data: config = {} } = useRequest(rConfigNew);
  const { loading, run } = useRequest(rPost, { manual: true });

  return (
    <FormLayout router={props} title={config.title} fileds={config.form} loading={loading} handleSubmit={run}></FormLayout>
  )
}
