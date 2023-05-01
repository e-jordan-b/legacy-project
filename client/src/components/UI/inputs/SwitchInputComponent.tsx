import { Switch} from 'antd';

type switchInputComponentProps = {
  onchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchInputComponent = (props) => {

  return <Switch
  // name={props.name}
  checkedChildren="Private"
  unCheckedChildren="Public"
  onClick={props.onchange}
  />

}




export default SwitchInputComponent;