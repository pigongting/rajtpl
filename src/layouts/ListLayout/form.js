/* 开源-组件 */
import React from 'react';
import { Form, Button } from 'antd';
/* 自研-组件 */
import componentsForm from '@/components/Form/index.js';
/* 自研-样式 */
import './form.less';

export default (props) => {

  const { fileds = [], reload = () => {} } = props;

  return (
    <Form onFinish={(values) => reload({ ...values, pageindex: 0 })}>
      <div className="list-form-layout">
        {fileds.map((item, index) => {
          const ComponentName = componentsForm[item.type];

          if (ComponentName) {
            return (
              <div className="list-form-filed" key={index}>
                <Form.Item noStyle name={item.filed} rules={item.rules} initialValue={item.value}>
                  <ComponentName label={item.label} />
                </Form.Item>
              </div>
            );
          }

          return null;
        })}
        <Button type="primary" htmlType="submit">查询</Button>
      </div>
    </Form>
  );
}
