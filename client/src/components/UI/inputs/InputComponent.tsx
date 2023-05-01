import { Input} from 'antd';

type propsType = {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  required: boolean;
  maxLength: number;
  minLength: number;
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value: string;
}

const InputComponent = (props: propsType) => {

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