import request from 'umi-request';

// ====================================================
// 新建配置
export async function rConfigNew() {
  return {
    title: '高级表单',
    code: '/form/advanced-form',
    form: [
      {
        type: 'FormInput',
        filed: 'name',
        label: '标题',
        value: ''
      },
    ],
  };
}
// ====================================================


// ====================================================
// 新建
export async function rPost(params) {
  const res = await request.post('https://my-json-server.typicode.com/pigongting/json-server/posts');
  return res.data;
}
// ====================================================