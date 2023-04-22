import { Input, Select } from 'antd';


const InputComponent = (props) => {

  return (
    <Input
      id={props.id}
      name={props.name}
      type={props.type}
      autoComplete={props.autocomplete}
      required={props.required}
      placeholder={props.placeholder}
      onChange={props.onchange}
      disabled={props.disabled}
      value={props.value}
    />
  )
}

export default InputComponent;