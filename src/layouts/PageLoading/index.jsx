import React from 'react';
import { Spin } from 'antd';

const PageLoading = ({ tip }) => (
  <div style={{ paddingTop: 100, textAlign: 'center' }}>
    <Spin size="large" tip={tip} />
  </div>
);

export default PageLoading;
