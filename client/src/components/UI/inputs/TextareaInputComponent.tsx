import { Input } from 'antd';

type TextareaInputProps = {
  id: string;
  name: string;
  autoSize?: boolean | object;
  required?: boolean;
  placeholder?: string;
  onchange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  maxLength?: number;
  value?: string;
}

const TextareaInputComponent = (props: TextareaInputProps) => {

  return (

    <Input.TextArea
      id={props.id}
      name={props.name}
      autoSize={props.autoSize}
      required={props.required}
      placeholder={props.placeholder}
      onChange={props.onchange}
      disabled={props.disabled}
      maxLength={props.maxLength}
      style={{width: "100%"}}
      value={props.value}
    />

  )
}

export default TextareaInputComponent;