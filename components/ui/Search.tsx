'use client';

import { Select as AntdSelect, type SelectProps } from 'antd';
import { type FunctionComponent } from 'react';

export const defaultConfig: SelectProps = {
  popupClassName: 'search',
  bordered: true,
  showSearch: true,
};

const Search: FunctionComponent<SelectProps> = (props) => {
  return <AntdSelect {...defaultConfig} {...props} />;
};

export default Search;
