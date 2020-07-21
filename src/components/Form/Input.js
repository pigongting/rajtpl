/* 开源-组件 */
import React, { forwardRef } from 'react';
import { Input } from 'antd';

export default forwardRef((props, ref) => {
  const { label, value, placeholder } = props;

  const triggerChange = changedValue => {
    // 这个 onChange 是表单项组件提供的，用于收集值
    props.onChange(changedValue);
  }

  const handleChange = e => {
    triggerChange(e.target.value);
  }

  return (
    <Input placeholder={placeholder || '请输入'} addonBefore={label} value={value} onChange={handleChange}/>
  );
});
