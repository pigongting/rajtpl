/* 开源-组件 */
import React from 'react';
import { Form, Button, Row, Col } from 'antd';
/* 自研-组件 */
import componentsForm from '@/components/Form/index.js';
/* 自研-样式 */
import './index.less';

export default (props) => {
  const { router = {}, title = '未设置', fileds = [], loading = true, handleSubmit = () => {} } = props;

  return (
    <div className="form-layout">

      <div className="form-layout-head">
        <div className="form-layout-head-back" onClick={router.history.goBack}>返回</div>
        <div className="form-layout-head-slash">/</div>
        <div className="form-layout-head-title">{title}</div>
      </div>

      <div className="form-layout-body">
        <Form onFinish={handleSubmit} layout="vertical" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
          <Row gutter={16}>
            {fileds.map(item => {
              const ComponentName = componentsForm[item.type];

              if (ComponentName) {
                return (
                  <Col key={item.filed} span={12}>
                    <Form.Item label={item.label} name={item.filed} rules={item.rules} initialValue={item.value}>
                      <ComponentName placeholder={item.placeholder} />
                    </Form.Item>
                  </Col>
                );
              }

              return null;
            })}
          </Row>

          <div className="form-layout-submit">
            <Button type="primary" htmlType="submit" loading={loading}>提交</Button>
          </div>
        </Form>
      </div>

    </div>
  );
}
