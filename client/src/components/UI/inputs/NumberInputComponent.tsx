import { InputNumber } from "antd";

type propsType = {
  id: string;
  name: string;
  required: boolean;
  max: number;
  min: number;
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultNumber?: number;
}

const NumberInputComponent = (props) => {

  return (
    <InputNumber
      id={props.id}
      name={props.name}
      min={props.min}
      max={props.max}
      defaultValue={props.defaultNumber}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onchange}
       />
  )

}

export default NumberInputComponent;