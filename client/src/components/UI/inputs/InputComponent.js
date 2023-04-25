import { Input} from 'antd';


const InputComponent = (props) => {

  return (
    <Input
      id={props.id}
      name={props.name}
      type={props.type}
      autoComplete="off"
      required={props.required}
      placeholder={props.placeholder}
      onChange={props.onchange}
      disabled={props.disabled}
      value={props.value}
    />
  )
}

export default InputComponent;