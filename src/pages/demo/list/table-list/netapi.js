import request from 'umi-request';

// ====================================================
// 列表配置
export async function rConfigList() {
  console.log('rConfigList --------------------------------->');

  return {
    title: '企业管理',
    code: '/enterprise/list',
    api: {
      rConfig: '',
      rPagination: '',
      rReverse: '',
      rGetAll: '',
      rPost: '',
      rGet: '',
      rPut: '',
      rDelete: '',
    },
    form: [
      {
        type: 'FormInput',
        filed: 'name',
        label: '企业名称',
      },
      {
        type: 'FormInput',
        filed: 'code',
        label: '企业编码',
      }
    ],
    table: [
      {
        type: 'TableLink',
        title: '企业名称',
        dataIndex: 'name',
      },
      {
        title: '企业编码',
        dataIndex: 'code',
      },
      {
        title: '企业简称',
        dataIndex: 'shortName',
      },
      {
        title: '所属行业',
        dataIndex: 'industry',
      },
      {
        title: '联系人',
        dataIndex: 'contacts',
      },
      {
        title: '联系电话',
        dataIndex: 'contactNumber',
      },
      {
        title: '主管理员',
        dataIndex: 'mainManager',
      },
      {
        title: '所属区域',
        dataIndex: 'region',
      },
    ]
  };
}
// ====================================================

// ====================================================
// 分页
export async function rPagination(params) {
  console.log('rPagination --------------------------------->');
  return await request.get('https://my-json-server.typicode.com/pigongting/json-server/posts/1');
}
// ====================================================