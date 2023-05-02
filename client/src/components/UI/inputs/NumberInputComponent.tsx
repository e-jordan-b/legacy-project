// WE CAN GET RID OF THIS FILE
import React, { FunctionComponent } from 'react';
import { InputNumber, InputNumberProps } from "antd";

const NumberInputComponent: FunctionComponent<InputNumberProps>  = ({ id, name, required, max, min, placeholder, onChange }) => {

  return (
    <InputNumber
      id={id}
      name={name}
      min={min}
      max={max}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  )

}

export default NumberInputComponent;