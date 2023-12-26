'use client';

import { Select as AntdSelect, type SelectProps } from 'antd';
import { type FunctionComponent } from 'react';

export const defaultConfig: SelectProps = {
  bordered: true,
  showSearch: true,
  allowClear: true,
};

const Select: FunctionComponent<SelectProps> = (props) => {
  return <AntdSelect popupClassName="select" {...defaultConfig} {...props} />;
};

export default Select;
