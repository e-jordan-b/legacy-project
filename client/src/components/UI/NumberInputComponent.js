import { InputNumber } from "antd";
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
      onChange={props.onchange} />
  )

}

export default NumberInputComponent;