'use client'

import { Select as AntdSelect, type SelectProps } from "antd";
import { type FunctionComponent } from "react";

export const defaultConfig: SelectProps = {
  className: 'select',
  bordered: true,
  showSearch: true,
}

const Select: FunctionComponent<SelectProps> = (
  props
) => {
  return (
    <AntdSelect
      dropdownClassName="select"
      {...defaultConfig}
      {...props}
    />
  );
};

export default Select;
