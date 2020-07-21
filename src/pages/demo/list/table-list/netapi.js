import request from 'umi-request';

// ====================================================
// 列表配置
export async function rConfigList() {
  console.log('rConfigList --------------------------------->');

  return {
    title: '规则管理',
    code: '/rule/list',
    form: [
      {
        type: 'FormInput',
        filed: 'name',
        label: '规则名称',
      },
      {
        type: 'FormInput',
        filed: 'code',
        label: '使用状态',
      }
    ],
    table: [
      {
        title: '规则名称',
        dataIndex: 'name',
      },
      {
        title: '描述',
        dataIndex: 'desc',
      },
      {
        title: '服务调用次数',
        dataIndex: 'callNo',
      },
      {
        title: '状态',
        dataIndex: 'status',
      },
      {
        title: '上次调度时间',
        dataIndex: 'metaUpdated',
      },
    ]
  };
}
// ====================================================

// ====================================================
// 分页
export async function rPagination(params) {
  console.log('rPagination --------------------------------->');
  console.log(params);
  const res = await request.get('https://my-json-server.typicode.com/pigongting/json-server/rules');
  return res.data;
}
// ====================================================