import { Select } from 'antd';

type Option = {
  label: string;
  value: string;
}

type propsType = {
  id: string;
  placeholder: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
  disabled?: boolean;
  type?: string;
  name?: string;
}

const SelectInputComponent = (props: propsType) => {
  return (
    <Select
    id={props.id}
    mode="multiple"
    allowClear
    placeholder={props.placeholder}
    onChange={props.onchange}
    options={props.options}
    disabled={props.disabled}
    />
)
}

export default SelectInputComponent;