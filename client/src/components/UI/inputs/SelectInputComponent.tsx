import React, { FunctionComponent } from 'react';
import { Select, SelectProps } from 'antd';

// type Option = {
//   label: string;
//   value: string;
// }

// type propsType = {
//   id: string;
//   placeholder: string;
//   onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   options: Option[];
//   disabled?: boolean;
//   type?: string;
//   name?: string;
// }

const SelectInputComponent: FunctionComponent<SelectProps> = ({ id,  mode, allowClear, placeholder, onChange, options, disabled }) => {
  return (
    <Select
    id={id}
    mode="multiple"
    allowClear
    placeholder={placeholder}
    onChange={onChange}
    options={options}
    disabled={disabled}
    />
)
}

export default SelectInputComponent;