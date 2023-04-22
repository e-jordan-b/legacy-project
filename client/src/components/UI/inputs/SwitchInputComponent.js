import { Switch} from 'antd';

const SwitchInputComponent = (props) => {

  return <Switch
  name={props.name}
  checkedChildren="Private"
  unCheckedChildren="Public"
  onClick={props.onchange}
  />

}




export default SwitchInputComponent;