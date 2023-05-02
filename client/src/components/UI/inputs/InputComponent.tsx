import React, { FunctionComponent } from 'react';
import { Input, InputProps } from 'antd';

// type propsType = {
//   id: string;
//   name: string;
//   type: string;
//   autoComplete: string;
//   required: boolean;
//   maxLength?: number;
//   minLength?: number;
//   placeholder: string;
//   onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   disabled?: boolean;
//   value: string;
// }

const InputComponent: FunctionComponent<InputProps> = ({id, name, type, autoComplete, required, placeholder, onChange, disabled, value }) => {

  return (
    <Input
      id={id}
      name={name}
      type={type}
      autoComplete="off"
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      value={value}
    />
  )
}

export default InputComponent;