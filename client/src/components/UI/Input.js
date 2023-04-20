import { Input } from 'antd';

//TODO: return different types
//of inputs depending on type

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
  />
)
}

export default InputComponent;