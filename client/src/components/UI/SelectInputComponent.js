import { Select } from 'antd';

const SelectInputComponent = (props) => {
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